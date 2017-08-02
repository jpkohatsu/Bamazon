CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT (10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR (45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT (10) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

Insert Into products (product_name, department_name, price, stock_quantity)
Values 
	("Soccer Ball", "Sports", 25.50, 100),
	("Denim Jeans", "Clothing", 50.00, 20),
	("Ray Ban Aviators", "Accessories", 75.25, 25),
	("Shrek blanket", "Kids", 15.00, 20),
	("The Wackness", "Entertainment", 20.00, 15),
	("Margin Call", "Entertainment", 20.00, 20),
	("Kung Fu Panda Cuddle Buddy", "Kids", 22.25, 50),
	("Manchester City shorts", "Sports", 30.00, 35),
	("Kung Fu Panda Tootbrush", "Kids", 3.75, 30),
	("Kung Fu Panda Dumpling Maker", "Kitchen", 50.00, 15)

	
