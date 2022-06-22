const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserDetailSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    positionTitle: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});
const UserDetail = mongoose.model('UserDetail', UserDetailSchema);

module.exports = UserDetail;