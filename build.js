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

// Check if -c flag is present and we're on macOS
const shouldCopy = process.argv.includes("-c") && process.platform === "darwin";
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
  
  await esbuild.build({
    entryPoints: [srcPath],
    bundle: true,
    outfile: outPath,
    format: "cjs",
    platform: "node",
    target: "es2020",
    external: ["react"],
    plugins: [{
      name: 'css-import-processor',
      setup(build) {
        build.onLoad({ filter: /\.(js|jsx)$/ }, async (args) => {
          let contents = await fs.promises.readFile(args.path, 'utf8');
          
          // Find CSS template literals with @import statements
          const cssRegex = /css:\s*`([^`]+)`/g;
          let match;
          let lastIndex = 0;
          let result = '';
          
          while ((match = cssRegex.exec(contents)) !== null) {
            // Add everything up to this match
            result += contents.slice(lastIndex, match.index);
            
            const css = match[1];
            if (css.includes('@import')) {
              // Process imports
              const processedCss = await processCss(css);
              // Escape any problematic characters in the CSS
              const escapedCss = processedCss
                .replace(/\\/g, '\\\\') // Escape backslashes
                .replace(/`/g, '\\`')   // Escape backticks
                .replace(/\$/g, '\\$'); // Escape dollar signs
              
              result += `css:\`${escapedCss}\``;
            } else {
              // Keep original CSS if no imports
              result += match[0];
            }
            
            lastIndex = match.index + match[0].length;
          }
          
          // Add any remaining content
          result += contents.slice(lastIndex);
          
          return { 
            contents: result, 
            loader: path.extname(args.path).slice(1) 
          };
        });
      }
    }]
  });

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
