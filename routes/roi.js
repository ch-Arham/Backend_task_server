const express = require("express");
const router = express.Router();
const ROI = require("../models/ROI");
const { body, validationResult } = require("express-validator");

// Route 1: GET /api/roi -- Get all roi
router.get("/",async (req, res) => {
    let success = true;
      try {
        const roi = await ROI.find();
        res.status(200).json({roi, success});
      } catch (err) {
        success = false;
        console.log(err.message);
        res.status(500).json({message:"could not get ROI",success,error});
      }
    });

// Route 2: POST /api/roi/addROI -- Add roi
router.post("/addROI", 
[
    body("clashReport", "Enter a valid Clash Report").isNumeric({ min: 1 }),
],
async (req, res) => {
    let success=true;
    //if there are errors, send bad request with error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        const roi = await ROI.create(req.body);
        res.json({ roi, success});
    }catch(error){
        res.json({ error, success: false});
        console.log(error.message)
    }
});


module.exports = router;