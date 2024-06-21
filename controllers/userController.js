const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
module.exports = {
    postSignup: async (req, res) => {
        // console.log(req.body);
        try {
            const { username, email, password } = req.body
            const exisistUser = await userModel.findOne({ email })
            if (exisistUser) {
                return res.status(400).json('User already exist')
            }
            else {
                const hashPassword = await bcrypt.hash(password, 10)
                const newUser = new userModel({
                    username,
                    email,
                    password: hashPassword
                })
                await newUser.save()
                res.status(200).json('user registerd Successfull')
            }
        } catch (error) {
            console.log(error);
        }
    },
    postLogin:async(req,res)=>{
        const {email,password} = req.body
        // console.log(req.body);
        const exisistUser = await userModel.findOne({ email })
        if(!exisistUser){
            return res.json('User does not exist ')
        }else{
            const passwordCheck = await bcrypt.compare(password,exisistUser.password)
            if(passwordCheck){
                res.status(200).json('login success')
            }else{
                res.status(400).json('Invalid password')
            }
        }
    }

}