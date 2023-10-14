import { DateTime } from 'luxon'
import {
  column,
  BaseModel,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import Vehicle from 'App/Models/Vehicle'

export default class VehicleType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Vehicle)
  public vehicle: HasMany<typeof Vehicle>
}
