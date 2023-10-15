import { DateTime } from 'luxon'
import Approval from 'App/Models/Approval'
import Role from 'App/Models/Role'
import {
  column,
  BaseModel,
  hasMany,
  HasMany,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  roleId: number

  @hasMany(() => Approval)
  public approvals: HasMany<typeof Approval>

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>
}
