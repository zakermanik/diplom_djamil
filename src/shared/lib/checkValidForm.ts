import type { FormInstance } from 'element-plus'

type checkValidFormReturnValue = Promise<boolean>

export async function checkValidForm(formEl?: FormInstance): checkValidFormReturnValue {
  let isValid = true
  if (formEl) {
    await formEl.validate((valid) => {
      if (!valid)
        isValid = false
    })
  }
  return isValid
}
