import path from 'path'

function getAppDir (mainModule, subDir = '') {
  return path.dirname(path.join(mainModule, subDir))
}

export default getAppDir
