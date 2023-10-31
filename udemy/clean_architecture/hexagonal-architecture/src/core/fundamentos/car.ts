export interface Car {
  readonly maxVelocity: number
  atualVelocity: number
  accelerate: () => void
  brake: () => void
}
