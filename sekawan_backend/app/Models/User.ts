import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Approval from 'App/Models/Approval'
import Role from 'App/Models/Role'
import { 
  column,
  beforeSave,
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
  public name: string | null

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @column()
  roleId: number

  @hasMany(() => Approval)
  public approvals: HasMany<typeof Approval>

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>
}
