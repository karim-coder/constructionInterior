const express = require('express')
const User = require('../models/userInfo')
const addminUser = require('../models/adminUser')
const router = express.Router()

router.post('/userinfo', async(req, res)=>{
    try{
        
        const user = new User(req.body)
        await user.save().then(()=>{
            res.send('Thank you for respons')
        }).catch((e)=>{
            res.send(e)
        })

    } catch(e){
        res.status(404).send(e)
    }
})

router.post('/adminUser/signin', async (req, res)=>{
    try{
        const user = await addminUser.findByCredential(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({user: user.getPublicProfile()})
    } catch(e){
        res.status(404).send(e)
    }

})

router.post('/adminUser/signup', async (req, res)=>{
    try{
        const user = new addminUser(req.body)
        await user.save().then(()=>{
            res.send('Admin has been created!')
        }).catch((e)=>{
            res.send(e)
        })
    } catch(e){
        res.status(404).send(e)
    }
})

// router.post('adminUser/signin', async(req, res)=>{
//     console.log('hi')
//     // const user = await addminUser.findByCredential(req.body.email, req.body.password)
//     // if(user){
//     //     res.send('hello')
//     // }
// })

router.get('/data', (req, res)=>{
    res.send('hello dear welcome to the data pages and will be in contact soon')
})

module.exports = router