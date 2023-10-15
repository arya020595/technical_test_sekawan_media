import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DriverFactory from "Database/factories/DriverFactory"

export default class extends BaseSeeder {
  public async run () {
    // await DriverFactory.createMany(10)
  }
}
