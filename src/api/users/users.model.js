const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const { validationPassword, validationEmail } = require('../../utils/validators/validators');

const userSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        password: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true },
    }
);

userSchema.pre("save", function(next){
    if (!validationPassword(this.password)) {
       
        return next(setError(400, 'the password syntax is not correct'));
    }
    if (!validationEmail(this.email)) {
      
        return next(setError(400, 'The email format is incorrect'));
    }
   
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('users', userSchema);
module.exports = User;