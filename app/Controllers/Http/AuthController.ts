import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {

  public async index({ }: HttpContextContract) {
    const users = await User.query().orderBy('id')
    return users
  }

  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password, {
      expiresIn: '10 day',
    })
    return token
  }

  public async update({request, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['email', 'password'])
    user.merge(data)
    await user.save()
    return user
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
