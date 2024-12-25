const fetch = require('node-fetch');
const path = require('path');

async function fetchCssContent(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSS from ${url}: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return `/* Failed to fetch ${url} */`;
  }
}

async function processCss(css) {
  // Regular expression to match @import statements
  const importRegex = /@import\s+(?:url\(['"]?([^'"()]+)['"]?\)|['"]([^'"]+)['"]);?/g;
  
  let processedCss = css;
  const imports = [];
  let match;

  // Collect all import URLs
  while ((match = importRegex.exec(css)) !== null) {
    const url = match[1] || match[2];
    if (url) {
      imports.push({
        fullMatch: match[0],
        url: url.trim()
      });
    }
  }

  // Fetch and replace all imports
  for (const imp of imports) {
    const cssContent = await fetchCssContent(imp.url);
    processedCss = processedCss.replace(imp.fullMatch, cssContent);
  }

  return processedCss;
}

module.exports = processCss; 