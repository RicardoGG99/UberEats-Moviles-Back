CREATE DATABASE IF NOT EXISTS dcl8ms23tsb5fs;

    CREATE TABLE IF NOT EXISTS Users(
        user_id SERIAL NOT NULL,
        user_email VARCHAR(100) NOT NULL,
        user_password VARCHAR(100) NOT NULL,
        PRIMARY KEY(user_id)
    );

  CREATE TABLE IF NOT EXISTS Commerce(
      commerce_id SERIAL NOT NULL,
      commerce_name VARCHAR(100) NOT NULL,
      commerce_category VARCHAR(100) NOT NULL,
      commerce_location VARCHAR(100) NOT NULL,
      commerce_dsc VARCHAR(100) NOT NULL,
      PRIMARY KEY(commerce_id) 
   );

   CREATE TABLE IF NOT EXISTS Product(
       product_id SERIAL NOT NULL,
       commerce_id VARCHAR(100) NOT NULL,
       product_name VARCHAR(100) NOT NULL,
       product_dsc VARCHAR(100) NOT NULL,
       product_price INT NOT NULL,
       PRIMARY KEY(product_id) 
   );

   CREATE TABLE IF NOT EXISTS Admin(
       admin_id SERIAL NOT NULL,
       admin_username VARCHAR(100) NOT NULL,
       admin_password VARCHAR(100),
       PRIMARY KEY(admin_id)
   );