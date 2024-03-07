import User from '../models/user.js';
class UserRepository{

    async create(data){
        try {
            const project=await User.create(data);
            return project;
        } catch (error) {
            console.log(error);
        }
    }
    async find(email){
        try {
            const project=await User.find({email});
            return project;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
        try {
            const project=await User.findById(id);
            return project;
        } catch (error) {
            console.log(error);
        }
    }
    async update(projectId, data){
        try {
            const project=await serializeUser.findOneAndUpdate(projectId,data);
            return project;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id) {
        try {
            const project=await User.findByIdAndRemove(id);
            return project;
        } catch (error) {
            console.log(error);   
        }
    }

    async findBy(data) {
        try {
            const response = await User.findOne(data);
            return response;
        } catch(error) {
            throw error;
        }
    }
    async getbyname({userInput})
    { 
        if (userInput == "") return []
        const keyword = userInput?{
                name:{
                    $regex:userInput, $options:"i"
                }
        }:{};
        try {
            const result = await User.find(keyword);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserRepository;