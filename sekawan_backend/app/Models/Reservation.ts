import { DateTime } from 'luxon'
import Approval from 'App/Models/Approval'
import Vehicle from 'App/Models/Vehicle'
import Driver from 'App/Models/Driver'
import Employee from 'App/Models/Employee'
import {
  column,
  BaseModel,
  hasMany,
  HasMany,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'

export default class Reservation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date({
    serialize: (value) => value.toFormat('dd LLL yyyy')
  })
  public reservationDate: DateTime

  @column.date({
    serialize: (value) => value.toFormat('dd LLL yyyy')
  })
  public usageStartDate: DateTime

  @column.date({
    serialize: (value) => value.toFormat('dd LLL yyyy')
  })
  public usageEndDate: DateTime

  @column()
  public reservationStatus: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Approval)
  public approval: HasMany<typeof Approval>

  @belongsTo(() => Vehicle)
  public vehicle: BelongsTo<typeof Vehicle>
  
  @belongsTo(() => Employee)
  public employee: BelongsTo<typeof Employee>

  @belongsTo(() => Driver)
  public driver: BelongsTo<typeof Driver>
}