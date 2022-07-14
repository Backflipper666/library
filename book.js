let myLibrary = [];
let wrapper = document.createElement("div")
document.body.appendChild(wrapper)
let columnLeft = document.createElement("div")
let columnRight = document.createElement("div")
wrapper.appendChild(columnLeft)
wrapper.appendChild(columnRight)



function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  myLibrary.push(this)
}

function addBookToLibrary() {
  // do stuff here
  getInput();
  myLibrary.push()

}
//addBookToLibrary()

/* const hobbit = new Book(title, author);
const potter = new Book(title, author) */



function displayOnPage(){
  //title is textContent of input title, author is input author etc
  //when clicked on submit button
  let titleForm = document.querySelector(".title")
  let authorForm = document.querySelector(".author")
  let pagesForm = document.querySelector(".pages")
  let readForm = document.querySelector(".read")

  

  console.log(titleForm);
}
displayOnPage()
//displayOnPage()
addNewBook()

function addNewBook(){
  let button = document.createElement("button");
  button.textContent = "NEW BOOK"
  document.body.appendChild(button)
  showForm()
  function showForm(){
    button.addEventListener("click", ()=>{
      let bookForm = document.querySelector("form.bookForm")
      bookForm.setAttribute("style", "visibility:visible; display:block;")
     
    })
  }
}



function getInput(){
  title = prompt('Book title: ')
  author = prompt('Book author: ')
}
function styleParagraph(){
  wrapper.setAttribute("style", "display:flex; ")
  columnLeft.setAttribute("style", "background-color: rgba(199, 197, 81, 0.8); padding:15px;")
  columnRight.setAttribute("style", "background-color:rgba(82, 249, 214, 0.8); padding:15px;")

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