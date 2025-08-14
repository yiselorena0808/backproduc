import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'

export default class PublicacionBlog extends BaseModel {
  public static table = 'publicacion_blogs'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_usuario:number

  @column()
  declare nombre_usuario:string

  @column()
  declare titulo: string

   @column()
  declare fecha_Actividad: Date

  @column()
  declare descripcion: string

  @column()
  declare imagen: string

  @column()
  declare archivo: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Usuario)
  declare usuario: BelongsTo<typeof Usuario>
}

