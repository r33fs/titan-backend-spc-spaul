//var exports = products.exports = {};
//Create a class that represents a product. It should have a name, price, description, and qty property.
class product {
    constructor(name, price, description, qty){
        this.name = name;
        this.price = price;
        this.description = description;
        this.qty = qty;
    }
}
//Create a function called “products” and export that function.
//This function should return a json array of the fake products
//exports.products = function() {
function products() {
    var inventory = [new product("cream", 5.00, "A carton of fatty liquid used for cooking. Good for making ice cream.", 35), 
                        new product("sugar", 6.00, "A paper sack full of sweet crystals. Good for making ice cream.", 18), 
                        new product("eggs", 2.00, "A carton of delicious breakfast food.  Good for making frozen custard, ice cream's better cousin.", 30), 
                        new product("milk", 4.00, "A carton of tasty, fatty liquid. Good for making ice cream.", 250), 
                        new product("vanilla", 15.00, "A small jar of sweet smelling paste filled with little black beans. Good for making ice cream.", 5)];
        //console.log(JSON.stringify(productArray));
        //Don't stringify it yet
        return inventory;
}

exports.products = products;