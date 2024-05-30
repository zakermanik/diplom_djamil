async function downloadBlobFile(data: any, type: string, name: string) {
  const currentDocument = document.createElement('a')
  const blobFile = new Blob([data], { type })
  currentDocument.href = URL.createObjectURL(blobFile)
  currentDocument.download = name
  currentDocument.click()
  currentDocument.remove()
}

export { downloadBlobFile }
