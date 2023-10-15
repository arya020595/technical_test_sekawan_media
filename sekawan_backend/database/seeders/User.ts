import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from "Database/factories/UserFactory"
import RoleFactory from "Database/factories/RoleFactory"

export default class extends BaseSeeder {
  public async run () {
    // const role1 = await RoleFactory.apply('approver').create()
    // const role2 = await RoleFactory.create()

    // await UserFactory
    //   .merge({ roleId: role1.id })
    //   .createMany(5)

    // await UserFactory
    //   .merge({ roleId: role2.id })
    //   .createMany(5)
  }
}
