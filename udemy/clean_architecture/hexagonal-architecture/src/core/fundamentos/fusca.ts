import { type Car } from './car'

export class Fusca implements Car {
  constructor (
    readonly maxVelocity: number = 140,
    private _atualVelocity: number = 0
  ) {}

  accelerate (): void {
    this._atualVelocity = Math.min(this._atualVelocity + 4, this.maxVelocity)
  }

  brake (): void {
    this._atualVelocity = Math.max(this._atualVelocity - 4, 0)
  }

  get atualVelocity (): number {
    return this._atualVelocity
  }
}
