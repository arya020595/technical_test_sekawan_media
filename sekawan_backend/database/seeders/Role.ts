import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RoleFactory from "Database/factories/RoleFactory"

export default class extends BaseSeeder {
  public async run () {
    // await RoleFactory.apply('approver').create()
    // await RoleFactory.create()
  }
}