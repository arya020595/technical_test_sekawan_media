import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Role from 'App/Models/Role'

export default class AuthController {
    async register({auth, request, response}: HttpContextContract) {
        const { email, password } = request.body()
        
        try {
            const role = await Role.findByOrFail('name', 'approver') // Default role            

            const user = await User.create({
                email,
                password,
                roleId: role.id
            })
            
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '3 days'
            })
            
            return response.status(201).json({user, token});
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'An error occurred while register user' });
        }
    }

    async login({auth, request, response}: HttpContextContract) {
        const { email, password } = request.body()

        try {
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '3 days'
            })
            
            return token
        } catch(error) {
            console.error(error);
            return response.unauthorized('Invalid credentials')
        }
    }
}
