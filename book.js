let myLibrary = [];
let wrapper = document.createElement("div")
document.body.appendChild(wrapper)
let columnTitle = document.createElement("div")
let columnAuthor = document.createElement("div")
let columnPages = document.createElement("div")
let columnRead = document.createElement("div")
wrapper.appendChild(columnTitle)
wrapper.appendChild(columnAuthor)
wrapper.appendChild(columnPages)
wrapper.appendChild(columnRead)



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

displayOnPage()

function displayOnPage(){
  //title is textContent of input title, author is input author etc
  //when clicked on submit button, textContent of inputs are their counterparts
  let titleForm = document.querySelector(".title")
  let authorForm = document.querySelector(".author")
  let pagesForm = document.querySelector(".pages")
  let readForm = document.querySelector(".read")
  let submitter = document.querySelector(".submitter")
  title = titleForm.value
  author = authorForm.value
  pages = pagesForm.value
  read = readForm.value
  titleForm.addEventListener("input", ()=>{
    title = titleForm.value
  })
  authorForm.addEventListener("input", ()=>{
    author = authorForm.value
  })
  pagesForm.addEventListener("input", ()=>{
    pages = pagesForm.value
  })
  readForm.addEventListener("input", ()=>{
    read = readForm.value
  })

  submitter.addEventListener("click", ()=>{
    //create 4 paragraphs and display Book.values on them
    let titleParagraph = document.createElement("p")
    let authorParagraph = document.createElement("p")
    let pagesParagraph = document.createElement("p")
    let readParagraph = document.createElement("p")

    titleParagraph.textContent = title
    authorParagraph.textContent = author
    pagesParagraph.textContent = pages
    readParagraph.textContent = read

    columnTitle.appendChild(titleParagraph)
    columnAuthor.appendChild(authorParagraph)
    columnPages.appendChild(pagesParagraph)
    columnRead.appendChild(readParagraph)
    console.log(title);
    styleParagraph()
  })
  
  

  
}
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
  columnTitle.setAttribute("style", "background-color: rgba(199, 197, 81, 0.8); padding:15px; border:1px solid  black;")
  columnAuthor.setAttribute("style", "background-color:rgba(82, 249, 214, 0.8); padding:15px;border:1px solid  black;")
  columnPages.setAttribute("style", "background-color:#b874c4; padding:15px;border:1px solid  black;")
  columnRead.setAttribute("style", "background-color:#52e8ff; padding:15px;border:1px solid  black;")

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