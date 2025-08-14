import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'gestion_epp'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_usuario').unsigned()
        .references('id')
        .inTable('usuarios')
        .onDelete('CASCADE').onUpdate('CASCADE')
        .notNullable()
      table.string('nombre')
      table.string('apellido')
      table.string('cedula')
      table.string('cargo')
      table.string('productos')
      table.string('cantidad')
      table.string('importancia')
      table.string('estado').nullable()
      table.date('fecha_creacion')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
