import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VehicleFactory from "Database/factories/VehicleFactory"
import EmployeeFactory from "Database/factories/EmployeeFactory"
import DriverFactory from "Database/factories/DriverFactory"
import ReservationFactory from "Database/factories/ReservationFactory"
import UserFactory from "Database/factories/UserFactory"
import RoleFactory from "Database/factories/RoleFactory"
import ApprovalFactory from "Database/factories/ApprovalFactory"

export default class extends BaseSeeder {
  public async run () {
    const vehicles = await VehicleFactory.createMany(5)
    const employees = await EmployeeFactory.createMany(5)
    const drivers = await DriverFactory.createMany(5)

    // Membuat peran 'approver' dan peran biasa
    const role1 = await RoleFactory.apply('approver').create()
    const role2 = await RoleFactory.create()

    // Membuat pengguna dengan peran 'approver'
    const users1 = await UserFactory
      .merge({ roleId: role1.id })
      .createMany(5)

    // Membuat pengguna dengan peran biasa
    const users2 = await UserFactory
      .merge({ roleId: role2.id })
      .createMany(5)

    for (let i = 0; i < 5; i++) {
      // Membuat Reservation dengan status 'pending'
      const pendingReservation = await ReservationFactory
        .merge({ employeeId: employees[i].id, vehicleId: vehicles[i].id, driverId: drivers[i].id })
        .create()

      // Membuat Approval terkait dengan pengguna yang sesuai, maksimal 2 approval
      for (let j = 0; j < 2; j++) {
        await ApprovalFactory
          .merge({ userId: users2[i].id, reservationId: pendingReservation.id, approvalDate: undefined })
          .create()
      }

      // Membuat Reservation dengan status 'completed'
      const completedReservation = await ReservationFactory
        .apply('completed')
        .merge({ employeeId: employees[i].id, vehicleId: vehicles[i].id, driverId: drivers[i].id })
        .create()

      // Membuat Approval terkait dengan pengguna yang sesuai, maksimal 2 approval
      for (let j = 0; j < 2; j++) {
        await ApprovalFactory
          .merge({ userId: users2[i].id, reservationId: completedReservation.id })
          .create()
      }

      // Membuat Reservation dengan status 'borrowed'
      const borrowedReservation = await ReservationFactory
        .apply('borrowed')
        .merge({ employeeId: employees[i].id, vehicleId: vehicles[i].id, driverId: drivers[i].id })
        .create()

      // Membuat Approval terkait dengan pengguna yang sesuai, maksimal 2 approval
      for (let j = 0; j < 2; j++) {
        await ApprovalFactory
          .merge({ userId: users2[i].id, reservationId: borrowedReservation.id })
          .create()
        }
    }
  }
}
