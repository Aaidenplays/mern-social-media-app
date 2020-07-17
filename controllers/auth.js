const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');


exports.signup = async(req, res) => {
    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(403).json({
        error: "Email is taken!"
    })
    const user = await new User(req.body)
    await user.save()
    res.status(200).json({message: "Signup success! Please login."});
}

exports.signin = (req, res) => {
    //find user based on email

    //if error or no user

    //if user, authenticate

    //generate a token with user_id and secret

    //persist the token as 't' in cookie wit expiry date

    //return response with user and token to te frontend client

}