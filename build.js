const esbuild = require("esbuild");
const path = require("path");
const fs = require("fs");
const os = require("os");
const processCss = require("./utils/processCss");

// Get current working directory
const cwd = process.cwd();

// Define paths relative to current directory
const srcPath = path.join(cwd, "Essentials.nkplugin.jsx");
const outPath = path.join(cwd, "build", "Essentials.nkplugin.js");

// Ensure build directory exists
const buildDir = path.join(cwd, "build");
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Check for flags
const shouldCopy = process.argv.includes("-c") && process.platform === "darwin";
const shouldBundleCss = process.argv.includes("-b");

const pluginsPath = shouldCopy
  ? path.join(
      os.homedir(),
      "Library",
      "Application Support",
      "nekocord",
      "plugins",
      "Essentials.nkplugin.js"
    )
  : null;

async function build() {
  console.log("Building plugin...");
  
  const buildConfig = {
    entryPoints: [srcPath],
    bundle: true,
    outfile: outPath,
    format: "cjs",
    platform: "node",
    target: "es2020",
    external: ["react"],
  };

  // Only add CSS processing plugin if -b flag is present
  if (shouldBundleCss) {
    console.log("Processing CSS imports...");
    buildConfig.plugins = [{
      name: 'css-import-processor',
      setup(build) {
        build.onLoad({ filter: /\.(js|jsx)$/ }, async (args) => {
          let contents = await fs.promises.readFile(args.path, 'utf8');
          
          const cssRegex = /css:\s*`([^`]+)`/g;
          let match;
          let lastIndex = 0;
          let result = '';
          
          while ((match = cssRegex.exec(contents)) !== null) {
            result += contents.slice(lastIndex, match.index);
            
            const css = match[1];
            if (css.includes('@import')) {
              const processedCss = await processCss(css);
              const escapedCss = processedCss
                .replace(/\\/g, '\\\\')
                .replace(/`/g, '\\`')
                .replace(/\$/g, '\\$');
              
              result += `css:\`${escapedCss}\``;
            } else {
              result += match[0];
            }
            
            lastIndex = match.index + match[0].length;
          }
          
          result += contents.slice(lastIndex);
          
          return { 
            contents: result, 
            loader: path.extname(args.path).slice(1) 
          };
        });
      }
    }];
  }

  await esbuild.build(buildConfig);

  if (shouldCopy && pluginsPath) {
    fs.copyFileSync(outPath, pluginsPath);
    console.log("Copied to nekocord plugins directory");
  }
  
  console.log("Build complete!");
}

build().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
