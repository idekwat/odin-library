
const myLibrary = [];
const newBook = document.getElementById("addButton");
const bookForm = document.getElementById("newBook");
const submitData = document.getElementById("submitButton");
const bookColumn = document.querySelector(".bookList");
const myBooks = document.getElementById("myBooks");


function Book(title, author, pages, readval) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readval = readval;
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
    let pages = document.getElementById("pageTotal").value;
    let readval = document.getElementById("readStatus").checked;
    if(title != "" & author != "" & pages != "") {
        const newBook = new Book(title, author, pages, readval);
        myLibrary.push(newBook);
        displayBooks();
    }
    else {
        alert("please complete the damn form");
    }
}

function displayBooks() {
    const bookDisplay = document.createElement("div");
    const isRead = document.createElement("input");
    const displayTitle = document.createElement("p");
    const displayAuthor = document.createElement("p");
    const displayPages = document.createElement("p");
    const delButton = document.createElement("button");

    bookDisplay.className = "bookDisplay";

    for(let bookIndex = 0; bookIndex < myLibrary.length; bookIndex++) {
        displayTitle.innerText = myLibrary[bookIndex].title;
        displayAuthor.innerText = "by " + myLibrary[bookIndex].author;
        displayPages.innerText = myLibrary[bookIndex].pages +" pages";
        delButton.innerText = "del";

        displayTitle.id = "displayTitle";
        displayAuthor.id = "displayAuthor";
        displayPages.id = "displyPages";
        delButton.id = "delButton";

        bookDisplay.appendChild(displayTitle);
        bookDisplay.append(displayAuthor, displayPages, isRead, delButton);

        delButton.onclick = (e) => {
            alert(this.bookIndex + " will now be deleted from your library");
            deleteBook(bookDisplay, this.bookIndex);
        }

        Object.getPrototypeOf(Book.prototype);
        Book.prototype.sayTitle();


        /*
        isRead.onchange = (e) => {
            Book.prototype.readStatus(isRead.checked,this.bookIndex);
        }*/

    let randomColorR = (Math.random()*128) + 127;
    let randomColorG = (Math.random()*128) + 127;
    let randomColorB = (Math.random()*128) + 127;

    bookDisplay.style.backgroundColor = "rgb(" + randomColorR+ ", " + randomColorG + ", " + randomColorB + ")";

    isRead.setAttribute("type", "checkbox");
    isRead.style.marginTop = "auto";

    bookColumn.appendChild(bookDisplay);
    }
}

function deleteBook(displayed, thisbook) {
    bookColumn.removeChild(displayed);
    myLibrary.splice(thisbook, 1);
}


Book.prototype.sayTitle = function() {
}

/*
Book.prototype.toggleRead = function(bookRead) {
    switch(bookRead) {
        case(true):
        this.readval = true;
        console.log(this.title + " is read");
        break;
        case(false):
        this.readval = false;
        console.log(" is unread");
        break;
    }   
} */




