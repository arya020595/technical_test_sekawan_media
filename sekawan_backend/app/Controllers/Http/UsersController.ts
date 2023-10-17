import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Role from 'App/Models/Role'

export default class UsersController {
    public async index({ response }: HttpContextContract) {
        
        try {
            const users = await User.query()
            .preload('role')
  
            return response.status(200).json(users)
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error: 'An error occurred while fetching users' })
        }
    }

    public async create({ request, response }: HttpContextContract) {
        try {
            const {
            name,
            email,
            username,
            password,
            role_id,
            } = request.all();
        
            // Check if the specified role_id exists in the 'roles' table.
            const role = await Role.findOrFail(role_id);
        
            // Create a new user with the provided attributes.
            const user = new User();
            user.name = name;
            user.email = email;
            user.username = username;
            user.password = password;
        
            // Set the role_id to associate the user with a role.
            user.roleId = role.id;
            await user.save();
        
            return response.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'An error occurred while creating the user' });
        }
    }

    public async login ({ request, response }: HttpContextContract) {
        try {
            const { email, password } = request.body()
        
            const user = await User
                .query()
                .where('email', email)
                .where('password', password)
                .first()
            
            if (user) {
                return response.status(200).json({ data: user, message: 'User created successfully' });
            } else {
                return response.status(401).json({message: 'Invalid Login'})
            }
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'An error occurred while creating the user' });
        }
    }
}
