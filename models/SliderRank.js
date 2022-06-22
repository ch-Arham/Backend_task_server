const mongoose = require('mongoose');
const {Schema} = mongoose;

const SliderRankSchema = new Schema({
    rank: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

});
const SliderRank = mongoose.model('SliderRank', SliderRankSchema);

module.exports = SliderRank;