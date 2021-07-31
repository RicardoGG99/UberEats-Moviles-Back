const db = require('../utils/db');
const queries = require('../utils/queries');

const createCar = async  (req, res) => {
    try{
    await db.query('BEGIN');
    const id = req.params.id;
    const product = await db.query(queries.GET_PRODUCTBYID,[id]);

    if(product.rows != ''){

    console.log('Product Found!');
    car = req.session.car;
    car.push(product.rows[0].product_id);
    req.session.car = car;

    res.status(200).send(req.session);
    }else{

        console.log(`Product not Found ${id}`);
        res.status(400).send('Product Not found!');
    }
    }catch(err){
        res.status(500).send('Server Error!')
        throw err;
    }
}

module.exports = {
    createCar
}