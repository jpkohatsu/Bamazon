var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "bamazon_DB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("You are connected");
	startBamazon();
});

function startBamazon() {
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;
		console.log ("Bamazon Home Page");
		console.log ("--------------------------------");
		for (var i = 0; i < res.length; i++) {
			console.log(
				"ID: " +
				res[i].item_id +
				" || Product Name: " +
				res[i].product_name +
				" || Department Name: " +
				res[i].department_name +
				" || Price: " +
				res[i].price +
				" || Stock Quantity: " +
				res[i].stock_quantity
			);
		}
		console.log("--------------------------------");
		inquirer
			.prompt([
			{
				name: "ID",
				type: "Input",
				message: "What is the ID of the product that you would like to buy?",
				validate: function(value) {
					if (isNaN(value) === false) {
						return true;
					} return false;
				}
			},
			{
				name: "Quantity",
				type: "Input",
				message: "How many units would you like to buy?",
				validate: function(value) {
					if (isNaN(value) === false) {
						return true;
					} return false;
				}
			}	
			])
			.then(function(answer) {
				var buyRequest = answer.ID;
				var buyPrice = parseInt(buyRequest.Price);
				console.log(buyPrice);
				var howMuch = parseInt(answer.Quantity);
				var totalAmount = parseInt(buyPrice * howMuch).toFixed(2);

				if (howMuch <= [buyRequest].stock_quantity) {
					connection.query("UPDATE products SET ? WHERE ?",
						[
							{
								stock_quantity: (howMuch - stock_quantity)
							},
							{
								item_id: buyRequest
							}
						],
						function(error) {
							if (error) throw err;
							console.log("Item successfully purchased!");
							console.log("Your total amount is $" + totalAmount.toFixed(2));
						});
				} else {
					console.log("Sorry, we are out of stock to fulfill your request.");
					startBamazon();
				}
			});
	});
}