// 9.Write a JavaScript program that creates a class `Book` with properties for title, author,
// and publication year. Include a method to display book details. Create a subclass called 'Ebook'
// that inherits from the 'Book' class and includes an additional property for book price. Override
// the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, publicYear) {
    this.title = title;
    this.author = author;
    this.publicYear = publicYear;
  }

  display() {
    console.log("Title : ", this.title);
    console.log("Author : ", this.author);
    console.log("Public Year : ", this.publicYear);
  }
}

class Ebook extends Book {
  constructor(title, author, publicYear, price) {
    super(title, author, publicYear);
    this.price = price;
  }

  display() {
    console.log("Title: ", this.title);
    console.log("Author: ", this.author);
    console.log("Public Year: ", this.publicYear);
    console.log("Price: ", this.price);
  }
}

let math = new Ebook("Math", "Pytago", "2000", "100$");
math.display();
