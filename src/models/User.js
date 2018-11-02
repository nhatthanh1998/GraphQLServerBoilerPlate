import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { SECRECT } from '../config/config'
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    displayName: {
        type: String
    },
    fullName: {
        type: String
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }],
    createdAt: {
        type: Number
    },
    role: {
        type: String
    },
    token: {
        type: String
    }
})

UserSchema.methods.generateToken = function () {
    var user = this
    var token = jwt.sign({
        username: user.username,
        role: user.role
    }, SECRECT)
    user.token = token
}

UserSchema.pre("save", function (next) {
    var user = this
    if (user.isModified("password")) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hashPassword) => {
                user.password = hashPassword
                next();
            })
        })
    } else {
        next()
    }
})
const User = mongoose.model('user', UserSchema)
   export default User