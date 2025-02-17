
const myLibrary = [];
const newBook = document.getElementById("addButton");
const bookForm = document.getElementById("newBook");
const submitData = document.getElementById("submitButton");
const bookColumn = document.querySelector(".bookList");

function Book(newTitle, newAuthor, newPagenum) { //read
    const book = new Array({title:newTitle, author:newAuthor, pages:newPagenum, isRead:false}); //read
    myLibrary.push(book);
    console.log(myLibrary);
}

function addBook() {
    bookForm.showModal();
}

submitData.onclick = (e) => {
    e.preventDefault();
    let newTitle = document.getElementById("bookTitle").value;
    let newAuthor = document.getElementById("bookAuthor").value;
    let newPagenum = document.getElementById("pageTotal").value;
    Book(newTitle, newAuthor, newPagenum);
}


function bookLibrary() {
    console.log(myLibrary.length);
}
