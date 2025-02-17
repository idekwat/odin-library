
const myLibrary = [];
const newBook = document.getElementById("addButton");
const bookForm = document.getElementById("newBook");


function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    bookForm.showModal();
}
/*  
this.reportBook = function() {
let info = title + "by " + author + ", " + pages + " pages, " + read + ".";
return info;
}*/