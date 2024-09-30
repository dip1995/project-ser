const signupSchema = require('../models/signup');


const handleGetRequestForSignup = async (req,res) => {
    try{
      const userId = req.params.id;
      console.log(req)
      const uData = await signupSchema.findById(userId);
      res.json(uData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
   }

const handlePostRequestForSignup = async (req,res) => {
    const body = req.body;
    console.log(body)
    await signupSchema.create({
        username: body.username,
        password: body.password
      });
    
    res.send("success")
}

module.exports = {
    handleGetRequestForSignup,
    handlePostRequestForSignup
}