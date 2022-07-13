let myLibrary = [];
let table = document.createElement("table")
let paragraphLeft = document.createElement("p")
let paragraphRight = document.createElement("p")


function Book(title, author) {
  // the constructor...
  this.title = title
  this.author = author
  myLibrary.push(this)
  
}

function addBookToLibrary() {
  // do stuff here
  getInput();
  myLibrary.push()

}
addBookToLibrary()

const hobbit = new Book(title, author);
const potter = new Book(title, author)

table.textContent = myLibrary
document.body.appendChild(table)

paragraphLeft.textContent = myLibrary[1].title
paragraphRight.textContent = myLibrary[1].author
document.body.appendChild(paragraphLeft)
document.body.appendChild(paragraphRight)


function getInput(){
  title = prompt('Book title: ')
  author = prompt('Book author: ')
}


//make a constructor with it's title and author
//create 1 object that is instance of Book()
//user  input in the addBookToLibrary() function should be the newly created object's attributes, e.g. title, author, it should be a function inside addBookToLibrary
//add the newly created object to the array via addBookToLibrary() function
//now add  all created objects to myLibrary array
//display myLibrary on the page in a structured way
  //title on the left hand side, author on the right
  //p-left.textContent = myLibrary[i].title
  //p-right.textContent  = myLibrary[i].author