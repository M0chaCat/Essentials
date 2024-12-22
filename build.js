const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const os = require('os');

// Get current working directory
const cwd = process.cwd();

// Define paths relative to current directory
const srcPath = path.join(cwd, 'Essentials.nkplugin.jsx');
const outPath = path.join(cwd, 'build', 'Essentials.nkplugin.js');

// Ensure build directory exists
const buildDir = path.join(cwd, 'build');
if (!fs.existsSync(buildDir)){
    fs.mkdirSync(buildDir, { recursive: true });
}

// Check if -c flag is present and we're on macOS
const shouldCopy = process.argv.includes('-c') && process.platform === 'darwin';
const pluginsPath = shouldCopy ? path.join(os.homedir(), 'Library', 'Application Support', 'nekocord', 'plugins', 'Essentials.nkplugin.js') : null;

esbuild.build({
  entryPoints: [srcPath],
  bundle: true,
  outfile: outPath,
  format: 'cjs',
  platform: 'node',
  target: 'es2020',
  external: ['react'],
}).then(() => {
  if (shouldCopy && pluginsPath) {
    fs.copyFileSync(outPath, pluginsPath);
    console.log('Copied to nekocord plugins directory');
  }
}).catch(() => process.exit(1)); 