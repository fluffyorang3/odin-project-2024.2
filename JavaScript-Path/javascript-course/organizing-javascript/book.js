function Car(make,model,year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getAge = function() {
    return 2024 - this.year;
  }
}

const car = new Car("Tesla", "Model S", 2024);

console.log(car.getAge())

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function() {
    if(read == "read") {
      return "read";
    } else if(read == "not read") {
      return "not read";
    } else {
      return "not specified"
    }
  }
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${this.read()}`;
  }
}

const book = new Book("12 Rules for Life", "Jordan B. Peterson", 368, "read");

console.log(book.info());

Book.prototype.yes = function() {
  console.log("YYYESSSS");
}

console.log(book.yes())