import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import EmployeeFactory from "Database/factories/EmployeeFactory"

export default class extends BaseSeeder {
  public async run () {
    // await EmployeeFactory.createMany(10)
  }
}
