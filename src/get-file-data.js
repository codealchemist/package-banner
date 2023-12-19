import { readFileSync } from 'fs'

export default function getFileData (file) {
  if (!file) return

  try {
    const data = readFileSync(new URL(file, import.meta.url))
    return data
  } catch (error) {
    console.log(`[ package-banner ]: Unable to read file: ${file}`)
    console.log(error.message)
    console.log()
  }
}
