import { DateTime } from 'luxon'
import {
  column,
  BaseModel,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'
import Vehicle from 'App/Models/Vehicle'

export default class VehicleService extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date({
    serialize: (value) => value.toFormat('dd LLL yyyy')
  })
  public serviceDate: DateTime

  @column()
  public serviceDescription: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Vehicle)
  public vehicle: BelongsTo<typeof Vehicle>
}
