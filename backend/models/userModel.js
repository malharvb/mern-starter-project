const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})

userSchema.statics.register = async function(email, password) {

    if(!email || !password) {
        throw Error('Enter a non-empty username and password')
    }
    if(!validator.isEmail(email)) {
        throw Error('Enter a valid email')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Enter a valid password')
    }
    
    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hashedPassword})

    return user
}


userSchema.statics.login = async function(email, password) {

    if(!email || !password) {
        throw Error('Enter a non-empty username and password')
    }

    const user = await this.findOne({email})

    if (!user) {
        throw Error('User email not registered')
    }

    const passMatched = await bcrypt.compare(password, user.password)
    
    if (!passMatched) {
        throw Error('Incorrect Password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)