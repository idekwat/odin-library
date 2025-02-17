
const myLibrary = [];
const newBook = document.getElementById("addButton");
const bookForm = document.getElementById("newBook");
const submitData = document.getElementById("submitButton");
const bookColumn = document.querySelector(".bookList");

function Book(title, author, pages) { //read
    const book = new Array([title, author, pages]); //read
    myLibrary.push(book);
    console.log(myLibrary);
    bookLibrary(myLibrary);
}

function addBook() {
    bookForm.showModal();
}

submitData.onclick = (e) => {
    e.preventDefault();
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let pages = document.getElementById("pageTotal").value;
   // let read = document.getElementById("readStatus").value;
    Book(title, author, pages)//, read);
}

function bookLibrary(currentbooks) {    
    const displayBook = document.createElement("div");
    displayBook.textContent = currentbooks.map((book) => book.title + " S P A C E ");
    bookColumn.appendChild(displayBook);
}

