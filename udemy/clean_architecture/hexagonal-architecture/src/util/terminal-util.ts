import { terminal } from 'terminal-kit'

export class TerminalUtil {
  title (text: string): void {
    terminal.clear()
    terminal.cyan(`${text}\n`)
    terminal.cyan('-'.repeat(text.length) + '\n')
  }

  clear (): void {
    terminal.clear()
  }

  showKeyValue (key: string, value: string): void {
    terminal.cyan(`${key}: `).yellow(`${value}\n`)
  }

  async menu (options: string[]): Promise<[number, string]> {
    const response = await terminal.singleColumnMenu(options).promise
    return [response.selectedIndex, response.selectedText]
  }

  async confirm (text: string): Promise<boolean> {
    terminal.magenta(`\n${text}`)
    const response = await terminal.singleColumnMenu([
      'Sim',
      'Não'
    ]).promise

    return response.selectedIndex === 0
  }

  async selection (text: string, options: string[]): Promise<[number, string]> {
    terminal.magenta(`\n${text}`)
    const response = await terminal.singleColumnMenu(options).promise

    return [response.selectedIndex, response.selectedText]
  }
}
