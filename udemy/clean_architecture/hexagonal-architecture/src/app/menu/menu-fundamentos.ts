import { TerminalUtil } from '../../util/terminal-util'
import { polimorfismo } from '../fundamentos/polimorfismo'

export async function menuFundamentos (): Promise<void> {
  const terminalUtil = new TerminalUtil()
  terminalUtil.title('FUNDAMENTOS')

  const [index] = await terminalUtil.menu([
    '1. Polimorfismo',
    'Voltar'
  ])

  switch (index) {
    case 0:
      await polimorfismo()
      break
    case 1:
      return
  }

  await menuFundamentos()
}
