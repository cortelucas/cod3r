export class Duration {
  constructor(readonly inSeconds: number) {
    if (!inSeconds) throw new Error('Duração é obrigatória')
    if (inSeconds <= 0) throw new Error('Duração deve ser maior que zero.')
  }

  get inHoursAndMinutes(): string {
    const hours = Math.floor(this.inSeconds / 3600)
    const minutes = Math.floor(this.inSeconds - (hours * 3600))

    return `${hours}h ${minutes}m`
  }
}
