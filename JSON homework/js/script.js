// question 1

let books = [
  {
    "Book ID": "10",
    "Book Name": "The best guy",
    "Book Author": "Charle",
    "Book Price": "20$",
  },
  {
    "Book ID": "20",
    "Book Name": "Behaviour",
    "Book Author": "Marry",
    "Book Price": "15$",
  },
  {
    "Book ID": "30",
    "Book Name": "Success",
    "Book Author": "Holmes",
    "Book Price": "18$",
  },
];
let JSONSTRING = JSON.stringify(books);
alert(JSONSTRING);
let items = JSON.parse(JSONSTRING);
console.log(books);
console.log(items);
// The original array "books" is similar to the array "items".


// question 2

let myCat = { Name: "Sandy", age: "3 Years", color: "Black", IsSterile: true };
let JSONSTRING1 = JSON.stringify(myCat);
alert(JSONSTRING1);
let yourCat = JSON.parse(JSONSTRING1);
console.log(yourCat);

