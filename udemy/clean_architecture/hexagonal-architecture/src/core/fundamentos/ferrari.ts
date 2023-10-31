import { type Car } from './car'

export class Ferrari implements Car {
  constructor (
    readonly maxVelocity: number = 324,
    private _atualVelocity: number = 0
  ) {}

  accelerate (): void {
    this._atualVelocity = Math.min(this._atualVelocity + 20, this.maxVelocity)
  }

  brake (): void {
    this._atualVelocity = Math.max(this._atualVelocity - 20, 0)
  }

  get atualVelocity (): number {
    return this._atualVelocity
  }
}
