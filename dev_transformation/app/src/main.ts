import { Course } from './core/course/model/course'

const course = new Course({ name: 'Curso de TypeScript', duration: 3600 })
console.log(course.name.fullName)
console.log(course.id.value)
console.log(course.duration.inHoursAndMinutes)