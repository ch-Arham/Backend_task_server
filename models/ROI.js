const mongoose = require('mongoose');
const {Schema} = mongoose;

const ROISchema = new Schema({
    clashReport: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

});
const ROI = mongoose.model('ROI', ROISchema);

module.exports = ROI;