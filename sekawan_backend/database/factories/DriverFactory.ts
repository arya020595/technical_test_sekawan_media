import driver from 'App/Models/Driver'
import Factory from '@ioc:Adonis/Lucid/Factory'
// import ReservationFactory from 'Database/factories/ReservationFactory'

export default Factory.define(driver, ({ faker }) => {
  return {
    name: faker.person.fullName(),
  }
})
.build()