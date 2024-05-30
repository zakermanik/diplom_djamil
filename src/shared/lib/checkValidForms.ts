import type { FormInstance } from 'element-plus'

export async function checkFormsValid(forms: FormInstance[]): Promise<boolean> {
  const validForms = []
  for (const form of forms) {
    await form.validate((valid) => {
      if (!valid)
        validForms.push(valid)
    })
  }
  return validForms.length === 0
}
