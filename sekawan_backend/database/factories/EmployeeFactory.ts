import Employee from 'App/Models/Employee'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Employee, ({ faker }) => {
  return {
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
  }
}).build()
