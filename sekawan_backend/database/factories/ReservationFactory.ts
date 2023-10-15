import reservation from 'App/Models/Reservation'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

export default Factory.define(reservation, ({ faker }) => {
  return {
    reservationStatus: 'PENDING',
    reservationDate: DateTime.fromJSDate(faker.date.recent()),
    usageStartDate:  DateTime.fromJSDate(faker.date.soon({ days: 3 })),
    usageEndDate: DateTime.fromJSDate(faker.date.soon({ days: 20 }))
  }
})
.state('completed', (reservation) => reservation.reservationStatus = 'COMPLETED')
.state('borrowed', (reservation) => reservation.reservationStatus = 'BORROWED')
.build()


