const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    images: [String]
})

const offer = mongoose.models.Offer ||  mongoose.model('Offer', offerSchema);

module.exports = offer
