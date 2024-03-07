import UserService from '../services/user-service.js'
const userService = new UserService();

export const signup = async (req, res) => {
    console.log(req.body);
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch(err) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: err
        });
    }
}
export const login = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}


export const getuserdetail = async (req, res) => {
    try {
        const response = await userService.getUserBytoken(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a teacher from service',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}