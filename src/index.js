import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
import getJsonData from './get-json-data.js'
import getAppDir from './get-app-dir.js'

function pkgBanner (mainModule, subDir = '') {
  const appDir = getAppDir(mainModule, subDir)
  const pkg = getJsonData(path.join(appDir, 'package.json'))

  // Print ASCII art if available.
  const asciiArtFile = path.join(appDir, 'ascii-art.txt').replace('file:', '')
  if (fs.existsSync(asciiArtFile)) {
    const art = fs.readFileSync(asciiArtFile, 'utf8')
    console.log(art)
  }

  // Print package name and version.
  console.log(`📦  ${pkg.name} v${pkg.version}\n`)
}

export default pkgBanner
