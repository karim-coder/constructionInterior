const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    }, 
    number: {
        type: Number
    },
    password: {
        type: String
    }, 
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

})

userSchema.methods.getPublicProfile = function(){
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens


    return userObject
}

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'secret')
    user.tokens = user.tokens.concat({token})
    
    await user.save()
    return token

}

userSchema.statics.findByCredential = async (email, password)=>{
    
    const user = await addminUser.findOne({email})
    if(!user){
        throw new Error('Unable to log in!!')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Unable to log in!')
    }
    return user
}

userSchema.pre('save', async function (next) {
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 10)
    }
    next()
})

const addminUser = mongoose.model('AdminUser', userSchema)

module.exports = addminUser