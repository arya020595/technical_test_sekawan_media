import role from 'App/Models/Role'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(role, () => {
  return {
    name: 'admin',
  }
})
.state('approver', (role) => role.name = 'approver')
.build()
