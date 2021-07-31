const {Router} = require('express');
const { createCar } = require('../helpers/car');
const router = Router();

router.post('/addcar/:id', createCar);
router.get('/car', function(req, res){
    console.log(req.session);
    res.status(200).send(req.session.car)
})

module.exports = router;