import vehicle from 'App/Models/Vehicle'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(vehicle, ({ faker }) => {
  return {
    name: faker.person.fullName(),
    isOwned: true,
    isAvailable: true,
    fuelConsumption: faker.number.int(100),
    licensePlate: faker.vehicle.vrm(),
  }
}).build()
