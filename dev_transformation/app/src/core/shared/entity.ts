import { ID } from './id'

export abstract class Entity {
  readonly id: ID

  constructor(id: string) {
    this.id = new ID(id)
  }

  isEqual(entity: Entity): boolean {
    return this.id.value === entity.id.value
  }

  isDifferent(entity: Entity): boolean {
    return !this.isEqual(entity)
  }
}
