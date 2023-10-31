import { TerminalUtil } from '../../util/terminal-util'
import { menuFundamentos } from './menu-fundamentos'

export async function menuPrincipal (): Promise<void> {
  const terminalUtil = new TerminalUtil()
  terminalUtil.title('MENU PRINCIPAL')
  const [index] = await terminalUtil.menu([
    '1. Fundamentos',
    'Sair'
  ])

  switch (index) {
    case 0:
      await menuFundamentos()
      break
    case 1:
      process.exit(0)
  }

  await menuPrincipal()
}
