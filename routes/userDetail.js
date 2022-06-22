const express = require("express");
const router = express.Router();
const UserDetail = require("../models/UserDetail");
const { body, validationResult } = require("express-validator");

// Route 1: GET /api/userDetail -- Get all userDetails
router.get("/",async (req, res) => {
    let success = true;
      try {
        const userDetails = await UserDetail.find();
        res.status(200).json({userDetails, success});
      } catch (err) {
        success = false;
        console.log(err.message);
        res.status(500).json({message:"could not get user data",success,error});
      }
    });

// Route 2: POST /api/userDetail/addUserDetails -- Add userDetails
router.post("/addUserDetails", 
[
    body("firstName", "Enter a valid First Name").isLength({ min: 2 }),
    body("lastName", "Enter a valid Last Name").isLength({ min: 2 }),
    body("positionTitle","Enter Position Title").isLength({ min: 1 }),
    body("companyName","Enter Company Name").isLength({ min: 1 }),
    body("contactNumber","Enter a valid contact number. Must be atleast 11 digits").isLength({ min: 11 }),
    body("email").isEmail(),
],
async (req, res) => {
    let success=true;
    //if there are errors, send bad request with error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        const userDetails = await UserDetail.create(req.body);
        res.json({ userDetails, success});
    }catch(error){
        res.json({ error, success: false});
        console.log(error.message)
    }
});





module.exports = router;