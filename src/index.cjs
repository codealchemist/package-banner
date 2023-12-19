'use strict';

var fs = require('fs');
var path = require('path');
require('module');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function getFileData (file) {
  if (!file) return

  try {
    const data = fs.readFileSync(new URL(file, (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('index.cjs', document.baseURI).href))));
    return data
  } catch (error) {
    console.log(`[ pkg-banner ]: Unable to read file: ${file}`);
    console.log(error.message);
    console.log();
  }
}

function loadJson (jsonFile) {
  if (!jsonFile) return

  try {
    const fileData = getFileData(jsonFile);
    const json = JSON.parse(fileData);
    return json
  } catch (error) {
    console.log(`[ pkg-banner ]: Unable to load JSON file: ${jsonFile}`);
    console.log(error.message);
    console.log();
  }
}

function getAppDir (mainModule, subDir = '') {
  return path.dirname(path.join(mainModule, subDir))
}

function pkgBanner (mainModule, subDir = '') {
  const appDir = getAppDir(mainModule, subDir);
  const pkg = loadJson(path.join(appDir, 'package.json'));

  // Print ASCII art if available.
  const asciiArtFile = path.join(appDir, 'ascii-art.txt').replace('file:', '');
  if (fs.existsSync(asciiArtFile)) {
    const art = fs.readFileSync(asciiArtFile, 'utf8');
    console.log(art);
  }

  // Print package name and version.
  console.log(`📦  ${pkg.name} v${pkg.version}\n`);
}

module.exports = pkgBanner;
