const loginSchema = require('../models/login');
const signupSchema = require('../models/signup');


const handlePostRequestForLogin = async (req,res) => {
   try{
    const uname = req.body.username;
    console.log(req.body)
    const uData = await signupSchema.findOne({'username':uname});
    if(uData){
        res.status(200).json({message : 'Login Successfully!'})
    }
   }
   catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
   }
}

module.exports = {
    handlePostRequestForLogin
}