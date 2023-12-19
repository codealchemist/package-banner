import getFileData from './get-file-data.js'

export default function loadJson (jsonFile) {
  if (!jsonFile) return

  try {
    const fileData = getFileData(jsonFile)
    const json = JSON.parse(fileData)
    return json
  } catch (error) {
    console.log(`[ pkg-banner ]: Unable to load JSON file: ${jsonFile}`)
    console.log(error.message)
    console.log()
  }
}
