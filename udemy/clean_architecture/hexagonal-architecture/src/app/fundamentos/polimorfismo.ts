import { type Car } from '../../core/fundamentos/car'
import { Ferrari } from '../../core/fundamentos/ferrari'
import { Fusca } from '../../core/fundamentos/fusca'
import { TerminalUtil } from '../../util/terminal-util'

export async function polimorfismo (): Promise<void> {
  const terminalUtil = new TerminalUtil()
  terminalUtil.title('POLIMORFISMO')

  const [carType] = await terminalUtil.selection(
    'Qual tipo de carro deseja?',
    [
      'Ferrari',
      'Fusca'
    ]
  )

  const car: Car = carType === 0 ? new Ferrari() : new Fusca()

  while (true) {
    terminalUtil.clear()
    terminalUtil.showKeyValue('Velocidade maxima', `${car.maxVelocity.toString()} km/h`)
    terminalUtil.showKeyValue('Velocidade atual', `${car.atualVelocity.toString()} km/h`)

    const [option] = await terminalUtil.selection(
      'Qual a opção?',
      [
        'Acelerar',
        'Frear'
      ]
    )

    option === 0 ? car.accelerate() : car.brake()

    const shouldContinue = await terminalUtil.confirm('Deseja continuar?')
    if (!shouldContinue) return
  }
}
