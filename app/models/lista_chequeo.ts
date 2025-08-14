import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'

export default class ListaChequeo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_usuario:number

  @column()
  declare usuario_nombre: string

  @column()
  declare fecha: string

  @column()
  declare hora: string

  @column()
  declare modelo: string

  @column()
  declare marca: string

  @column()
  declare soat: string

  @column()
  declare tecnico: string

  @column()
  declare kilometraje: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

   @belongsTo(() => Usuario)
     declare usuario: BelongsTo<typeof Usuario>
}
