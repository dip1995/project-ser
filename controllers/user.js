const userSchema = require("../models/user");
const handleGetRequest = async (req,res) => {
    try {
      let x = await userSchema.find({});
      console.log(x);
      res.json(x);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  }

 const handlePostRequest = async (req,res) => {
    try {
      const userData = req.body; // Parsed JSON data from request body
      // Create user in MongoDB
      let result = await userSchema.create({
        "first_name": userData.first_name,
        "last_name": userData.last_name,
        "email": userData.email,
        "gender": userData.gender,
        "job_title": userData.job_title
      });
  
      console.log(result);  // Log the result for debugging purposes
      res.status(201).send('User added successfully');  // Send success response
    } catch (error) {
      console.error(error);  // Log error for debugging purposes
      res.status(500).send('Error adding user');  // Send error response
    }
 } 

 const handleDeleteRequest = async (req,res) => {
  try{
     const userId = req.params.id;
     const uData = await userSchema.deleteOne({ _id: userId });
     res.status(201).json({ message: "Deleted Successfully!!" });
   }catch (error) {
    console.error(error);  // Log error for debugging purposes
    res.status(500).send('Error adding user');  // Send error response
  }
 }

 const handleGetRequestById = async (req,res) => {
  try{
    const userId = req.params.id;
    console.log(userId)
    const uData = await userSchema.findById(userId);
    res.json(uData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
 }

 const handlePatchRequest = async (req,res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body; // Data to update

    // First, check if the user exists
    const user = await userSchema.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user document
    const result = await userSchema.updateOne({ _id: userId }, { $set: updateData });
    // Check if any document was modified
    if (result.modifiedCount === 0) {
      return res.status(204).json({ message: "No changes made to the user data" });
    }
    console.log(result)

    res.status(200).json({ message: 'User updated successfully!' });
  } catch (error) {
    console.error(error); // Log error for debugging purposes
    res.status(500).send('Error updating user'); // Send error response
  }
 }

  
module.exports = {
    handleGetRequest,
    handlePostRequest,
    handleDeleteRequest,
    handleGetRequestById,
    handlePatchRequest
  };