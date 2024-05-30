import _ from 'lodash'

async function printFiles(base64Codes: string[]) {
  const flatBase64Codes = base64Codes.flat()
  const printWindow = window.open()
  printWindow?.document.open()
  printWindow?.document.write(`<html>
                                 <head>
                                 </head>
                                 <body>
                                   <div>
                                     ${flatBase64Codes.map(base64 => `
                                       <img
                                         src="data:image/jpg;base64,${base64}"
                                         alt=""
                                       >
                                     `).join('')}
                                   </div>
                                 </body>
                               </html>`)
  _.debounce(() => {
    printWindow?.print()
  }, 300)()
}

export { printFiles }
