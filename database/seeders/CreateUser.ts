import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
    {
      email: 'gabriel1coder@gmail.com',
      password: 'Obdc2525',
      role: 'admin'
      },
      {
        email: 'gabrielfernandesfotografias@outlook.com',
        password: 'Obdc2525',
        role: 'normal'
      }

    ])
  }
}
