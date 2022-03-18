const User = require('./users.model');
const bcrypt = require('bcrypt');
const JwtUtils = require('../../utils/jwt/jwt');
const { setError } = require('../../utils/error/error');


const register = async (req, res, next) => {
    try {
        const user = new User(req.body);
        
        const userExist = await User.findOne({ email: user.email })
        if (userExist) {
       
            return next(setError(400, 'this email already exists'))
        }
        const userDB = await user.save();
        return res.status(201).json(userDB.name)

    } catch (error) {
        return next(setError(400, 'Cant register user'))
    }
}

const login = async (req, res, next) => {
    try {
        
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
         
            return next(setError(400, 'This user isn`t registered'))
        }
       
        if (bcrypt.compareSync(req.body.password, user.password)) {
           
            const token = JwtUtils.generateToken(user._id, user.email);
          
            return res.status(200).json(token);
        } else{
            return  next(setError(400, 'Wrong password'))
        }
    } catch (error) {
        return next(setError(400, 'User cannot sign in'))
    }
}

const logout = (req, res, next) => {
    try {
        
        const token = null;
        return res.status(201).json(token)
    } catch (error) {
        return next(setError(400, 'User cannot logout'))
    }
}

module.exports = { register, login, logout }