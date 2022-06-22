const express = require("express");
const router = express.Router();
const SliderRank = require("../models/SliderRank");
const { body, validationResult } = require("express-validator");

// Route 1: GET /api/sliderRank -- Get all sliderRank
router.get("/",async (req, res) => {
    let success = true;
      try {
        const sliderRank = await SliderRank.find();
        res.status(200).json({sliderRank, success});
      } catch (err) {
        success = false;
        console.log(err.message);
        res.status(500).json({message:"could not get ROI",success,error});
      }
    });

// Route 2: POST /api/sliderRank/addSliderRank -- Add sliderRank
router.post("/addSliderRank", 
[
    body("rank", "Enter a valid rank, must be between 1-10").isFloat({ min: 1, max: 10 }),
],
async (req, res) => {
    let success=true;
    //if there are errors, send bad request with error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        const sliderRank = await SliderRank.create(req.body);
        res.json({ sliderRank, success});
    }catch(error){
        res.json({ error, success: false});
        console.log(error.message)
    }
});


module.exports = router;