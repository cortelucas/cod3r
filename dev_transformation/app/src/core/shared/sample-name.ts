export class SampleName {
  constructor(readonly fullName: string, readonly min: number = 3, readonly max: number = 120) {
    if (min > max) throw new Error('Tamanho mínimo não pode ser maior que o máximo.')
    if (!fullName) throw new Error('Nome é obrigatório')
    if (fullName.length < min) throw new Error(`Nome deve ter no mínimo ${min} caracteres.`)
    if (fullName.length > max) throw new Error(`Nome deve ter no máximo ${max} caracteres.`)

    if (!fullName.match(/^[a-zA-ZÀ-ú-0-9\u00C0-\u017F ]+$/)) throw new Error('O nome deve conter apenas letras')
  }

  partial(quantity: number): string {
    return this.fullName.substring(0, quantity) ?? ''
  }
}