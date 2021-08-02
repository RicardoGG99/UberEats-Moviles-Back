const querys = {
  //User Queries
  GET_USERS: `SELECT * FROM Users`,
  GET_USERBYID: `SELECT * FROM Users WHERE user_id = $1`,
  CREATE_USER: `INSERT INTO Users (user_email, user_password) VALUES ($1, $2) RETURNING *`,
  GET_USERBYID: `SELECT * FROM Users WHERE user_id = $1`,
  GET_USERBYEMAIL: `SELECT * FROM Users WHERE user_email = $1`,
  UPDATE_USER: `UPDATE Users SET user_email = $1 WHERE user_id= $2 RETURNING *`,
  DELETE_USER: `DELETE FROM Users WHERE user_id = $1`,

  //LogIn
  LOGIN: `SELECT * FROM Users WHERE user_email = $1 AND user_password= $2`,

  //Validation Queries
  CHECKEMAIL: `SELECT * FROM Users WHERE user_email = $1`,
  CHECKID: `SELECT * FROM Users WHERE user_id = $1`,
  CHECKEXISTENCE: `SELECT * FROM Commerce WHERE commerce_name = $1`,
  CHECKCOMMERCEID: `SELECT * FROM Commerce WHERE commerce_id = $1`,
  CHECKPRODUCTID: `SELECT FROM Product WHERE product_id = $1`,
  CHECKADMIN: `SELECT FROM Admin WHERE username = $1`,
  CHECKPAYMENT: `SELECT * FROM Payment WHERE payment_id = $1`,

  //Commerce Queries

  CREATE_COMME: `INSERT INTO Commerce (commerce_name, commerce_category, commerce_location, commerce_dsc) VALUES ($1, $2, $3, $4) RETURNING *`,
  GET_COMMERCES: `SELECT * FROM Commerce`,
  GET_COMMERCEBYID: `SELECT * FROM Commerce WHERE commerce_id = $1`,
  UPDATE_COMMERCE: `UPDATE Commerce SET commerce_name = $1, commerce_category = $2, commerce_location = $3, commerce_dsc = $4 WHERE commerce_id = $5 RETURNING *`,
  DELETE_COMMERCE: `DELETE FROM Commerce WHERE commerce_id = $1`,

  //Product Queries

  CREATE_PRODUCT: `INSERT INTO Product (commerce_id, product_name, product_dsc, product_price) VALUES ($1, $2, $3, $4) RETURNING *`,
  UPDATE_PRODUCT: `UPDATE Product SET product_name = $1, product_dsc = $2, product_price = $3 WHERE product_id = $4`,
  DELETE_PRODUCT: `DELETE FROM Product WHERE product_id = $1`,
  GET_PRODUCTS: `SELECT * FROM Product`,
  GET_PRODUCTBYID: `SELECT * FROM Product WHERE product_id = $1`,
  GET_PRODUCTSBYCOMMERCE: `SELECT * FROM Product WHERE commerce_id = $1`,

  //Admin Queries

  CREATE_ADMINPASS: `UPDATE Admin SET password = $1 WHERE username = $2`,

  //Payment Queries

  CREATE_PAYMENT: `INSERT INTO Payment (commerce_id,  payment_from, payment_to, payment_name, payment_ci, payment_date,  payment_code, payment_amount) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *` ,
  DELETE_PAYMENT: `DELETE FROM Payment WHERE payment_id = $1`,
  
};

module.exports = querys;
