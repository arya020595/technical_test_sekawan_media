import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Reservation from 'App/Models/User'
import {
  column,
  BaseModel,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'

export default class Approval extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date({
    serialize: (value) => {
      if (value) {
        return value.toFormat('dd LLL yyyy');
      } else {
        return null;
      }
    }
  })
  public approvalDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  userId: number

  @column()
  reservationId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Reservation)
  public reservation: BelongsTo<typeof Reservation>
}
