
import { UserRepository } from '../repository/index.js';
import jwt from 'jsonwebtoken';

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async signup(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch(error) {
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({email})
            return user;
        } catch(error) {
            throw error;
        }
    }

    async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            if(!user) {
                throw {
                    message: 'no user found'
                };
            }
            if(!user.comparePassword(data.password)) {
                throw {
                    message: 'incorrect password',
                };
            }
            const token = user.genJWT();
            return token;
        } catch(error) {
            throw error;
        }
    }

    async verifyToken(token) {
        try {
            const response =await jwt.verify(token, 'music_champs');
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }

    async getbyname(req)
    {
        try {
            const project= await this.userRepository.getbyname({
                userInput: req.query.search,
            });
            return project;
        } catch (error) {
            throw error
        }
    }  
}
export default UserService;