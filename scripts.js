
const myLibrary = [];
const newBook = document.getElementById("addButton");
const bookForm = document.getElementById("newBook");
const submitData = document.getElementById("submitButton");
const bookColumn = document.querySelector(".bookList");

function Book(title, author, pagenum) {
    this.title = title;
    this.author = author;
    this.pagenum = pagenum;
    this.isread = false;
    this.info = function() {
        return this;
    }
}

function addBook() {
    bookForm.showModal();
}

submitData.onclick = (e) => {
    e.preventDefault();
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let pagenum = document.getElementById("pageTotal").value;
    const newBook = new Book(title, author, pagenum);
    myLibrary.push(newBook);
}

function displayBooks() {
    for(let bookCount = 0; bookCount < myLibrary.length; bookCount++) {
        
    }
}