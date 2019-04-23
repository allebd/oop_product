/*
 * index.js 
 * 
 * OOP Sample Project - Andela Developer Challenge ©️ 2019
 * Andela Developer Challenge ©️ 2019
 * https://github.com/allebd/oop_product
 *
 * Bella Oyedele
 */

// Base class
class Product {
 	constructor(name, price) {
 		this.name = name;
 		this.price = price;
 	}

 	displayProduct() {
 		return `Product Name: ${this.name} \nProduct Price: ${this.price}`;
 	}
}

// Inheritance - Derived class with extends
class Book extends Product {
 	constructor(name, price, author) {
 		super(name, price);
 		this.author = author;
 	}
    
    // Polymorphism with same method name
 	displayProduct() {
 		//Abstraction on super.displayProduct()
 		return `${super.displayProduct()} \nProduct Author: ${this.author}`;
 	}
}

// Test cases
const rice = new Product('Rice', 400);
const apple = new Product('Green Apple', 50);
const bookWorm = new Book('Game of Thrones', 3000, 'George Martin');

// Display Test cases
console.log(rice.displayProduct());
console.log(apple.displayProduct());
console.log(bookWorm.displayProduct());


