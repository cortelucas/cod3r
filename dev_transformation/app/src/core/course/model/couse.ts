import { Duration } from '../../shared/duration'
import { Entity } from '../../shared/entity'
import { SampleName } from '../../shared/sample-name'

export interface CourseProps {
  id?: string
  name?: string
  duration?: number
}

export class Course extends Entity {
  readonly name: SampleName
  readonly duration: Duration
  constructor(props: CourseProps) {
    super(props.id!)
    this.name = new SampleName(props.name!)
    this.duration = new Duration(props.duration!)
  }
}
