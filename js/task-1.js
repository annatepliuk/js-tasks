//  function checkNumberSign(number) {
//     if (number > 0) {
//         return "positive";
//     } else if (number < 0) {
//         return "negative";
//     } else {
//         return "zero";
//     }
//  }
// console.log(checkNumberSign(5));    // Output: "positive"      
// console.log(checkNumberSign(-3));   // Output: "negative"

// function lengthOfString(str) {
//     return str.length;
// }
// console.log(lengthOfString("Hello world")); // Output: 11
// console.log(lengthOfString("JavaScript")); // Output: 10 


// // Path: js/task-2.js
// const userName = "Anna"; // Corrected syntax
// console.log(userName); // Output: Anna  


// // Path: js/task-3.js
// let age = 25; // Corrected syntax
// console.log(`I am ${age} years old`); //  Output: I am 25 years old


// // Path: js/task-4.js
// const x = 10;
// const y = 20;
// console.log(x +y);
// console.log(x - y);
// console.log(x * y); 
// console.log(x / y); // Output: 0.5

// // Path: js/task-5.js
// const city = "Kyiv";
// const cityString = `I am from ${city}`;
// console.log(cityString); // Output: I am from Kyiv

// // Path: js/task-6.js
// const price = 500;
// const priceString = `The price is ${price} UAH`;
// console.log (priceString); // Output: The price is 500 UAH

// // Path: js/task-7.js
// const userEmail = "anna@gmail.com" 
// const parts = userEmail.split("@");
// const Name = parts[0];
// const domain = parts[1];

// console.log(`Name: ${Name}`); // Output: Name: anna 
// console.log(`Domain: ${domain}`); // Output: Domain: gmail.com

// // const firstNme = "Anna";
// // const lastName = "poly";
// // const fullName = `${firstNme} ${lastName}`;
// // console.log(fullName); // Output: Anna poly

// // Path: js/task-9.js

// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;

//   if (screenWidth <= sm) {
//     return "Mobile screen";
//   } else if (screenWidth > sm && screenWidth <= md) {
//     return "Tablet screen";
//   } else if (screenWidth > md && screenWidth <= lg) {
//     return "Desktop screen";
//   } else {
//     return "Godzilla screen";
//   }
// }

// console.log(getScreenType(700));  // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
// console.log(getScreenType(1500)); // "Godzilla screen"
// console.log(getScreenType(320));  // "Mobile screen"



// // Output: Can type in chat!

// function canUserChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;

//   if (canChat) {
//     return "Can type in chat!";
//   } else {
//     return "Blocked from typing in chat!";
//   }
// }
// console.log(canUserChat(true, false));  // "Can type in chat!"
// console.log(canUserChat(true, true));   // "Blocked from typing in chat!"
// console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, true));  // "Blocked from typing in chat!"
// // ---------

// const fullName = "Jacob Mercer";
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);

// // -----
// function normalizeInput(input, to) {
//  if (to = "upper") {
//    return input.toUpperCase();
//  } else {
//    (to = "lower")
//    return input.toLowerCase();
//  }
// }
// console.log(normalizeInput("Hello World", "upper")); // Output: "HELLO WORLD"

// // -----
// function createFileName(name, ext) {
// //   return `${name.trim()}.${ext.trim()}`;
// //   console.log(createFileName("myfile", "txt")); // Output: "myfile.txt"
// // }  
// function foo() {
//     console.log(this);
//   }
  
//   foo(); // в браузері виведе об'єкт window
  
// function greet(name) {
//     console.log(`Hello, ${name}! I am ${this.person}`);
//   }
  
//   const person = "John";
//   const context = {
//     person: "Alice"
//   };
  
//   greet.call(context, "Bob"); 

//   function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }
// const user = {
//   name: "Alice"
// };
// const greet = sayHello.bind(user);
// greet("Hello");

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// // const showBooks = library.logBookCount.bind({ books: 724 });

// // showBooks();
// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// const apartment = {
// 	rooms: 4,
// 	floor: 2,
// 	taxFree: false
// };

// const condo = Object.create(apartment);
// condo.rooms = 3;
// console.log(condo.rooms); // Output: 3


// class User {
//   constructor(name, email) {
// 		console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}
// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// Що таке this усередині конструктора?
// class User {
//   constructor(name, email) {	
//     this.name = name; // this вказує на екземпляр, який створюється
//     this.email = email; // this вказує на екземпляр, який створюється
//   }
// } 
// class Car {
//   constructor (brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const brandCar = new Car(brand, model, price);

// Додай класу Car метод constructor, який приймає три параметри:

//     brand - марка автомобіля
//     model - модель автомобіля
//     price - ціна автомобіля

// Клас Car повинен створювати об'єкт з одноіменними властивостями 
// brand, model і price, які отримують свої значення з аргументів, переданих
//  при створенні нового екземпляра за допомогою оператора new.
// class Car {
//   constructor(brand, model, price) {
// 	this.brand = brand;
// 	this.model = model;
// 	this.price = price;
//   }
// }

// Виконай рефакторинг класу Car таким чином, щоб він приймав один 
// параметр - об'єкт з властивостями brand, model і price.
// class Car {
// 	constructor(brand, model, price) {
// 	  this.brand = brand;
// 	  this.model = model;
// 	  this.price = price;
// 	}
//   }
//   constructor({ brand, model, price }) {
//     this.brand = brand;	
//     this.model = model;
//     this.price = price;
//   }
// class User {
// 	constructor(params) {
// 	  this.name = params.name;
// 	  this.email = params.email;
// 	}
  
// 	getEmail() {
// 	  return this.email;
// 	}
  
// 	changeEmail(newEmail) {
// 	  this.email = newEmail;
// 	}
//   }
//   const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"


// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.
