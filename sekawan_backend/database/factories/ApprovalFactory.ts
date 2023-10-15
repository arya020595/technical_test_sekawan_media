import approval from 'App/Models/Approval'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

export default Factory.define(approval, ({ faker }) => {
  return {
    approvalDate: DateTime.fromJSDate(faker.date.soon({ days: 3 }))
  }
}).build()
