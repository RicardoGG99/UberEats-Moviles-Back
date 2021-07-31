const {Router} = require('express');
const { createPayment } = require('../helpers/auth.payment');
const router = Router();

router.post('/createpayment/:id', createPayment);

module.exports = router;