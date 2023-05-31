const express = require('express');
const router = express.Router();
const offer = require('../../schema/offer')

router.get('/offers/getOffers', async (req, res) => {
    try {
        const data = await offer.find();
        res.status(200).json({ error: false, message: 'fetched successfully', data: data[0].images })
    } catch (error) {
        res.status(500).json({ error: true, message: 'server error' })
    }


})

module.exports = router;