import { DateTime } from 'luxon'
import {
  column,
  BaseModel,
  hasMany,
  HasMany,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'
import VehicleType from 'App/Models/VehicleType'
import Reservation from 'App/Models/Reservation'
import VehicleService from 'App/Models/VehicleService'

export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public isOwned?: Boolean

  @column()
  public isAvailable?: Boolean

  @column()
  public licensePlate: string

  @column()
  public fuelConsumption: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => VehicleType)
  public vehicleType: BelongsTo<typeof VehicleType>

  @hasMany(() => Reservation)
  public reservation: HasMany<typeof Reservation>

  @hasMany(() => VehicleService)
  public vehicleService: HasMany<typeof VehicleService>
}
