import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'reservations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.date('reservation_date')
      table.date('usage_start_date')
      table.date('usage_end_date')
      table.string('reservation_status')
      table
      .integer('vehicle_id')
      .unsigned()
      .references('vehicles.id')
      table
      .integer('employee_id')
      .unsigned()
      .references('employees.id')
      table
      .integer('driver_id')
      .unsigned()
      .references('drivers.id')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
