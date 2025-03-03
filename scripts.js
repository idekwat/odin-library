
const myLibrary = []; //Array container for books

//for referncing html tags
const newButton = document.getElementById("addButton");
const bookForm = document.getElementById("newBook");
const submitData = document.getElementById("submitButton");
const bookColumn = document.querySelector(".bookList");
const myBooks = document.getElementById("myBooks");


/*  refactored to class
//Book constructor
function Book(title, author, pages, readval) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readval = readval;
} */

class Book {
    constructor(title, author, pages, readval) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readval = readval;
    }
}

//prototype for toggling if Book is read/unread
Book.prototype.changeRead = function(thisbook) {
    myLibrary[thisbook].readval = !myLibrary[thisbook].readval;
}
Book.prototype.titleCheck = function(thisbook) {
    alert(myLibrary[thisbook].title + " will now be deleted")
}

newButton.onclick = (e) => {
    addBook();
}

function addBook() {
    bookForm.showModal();
    submitData.onclick = (e) => {
        e.preventDefault();
        let title = document.getElementById("bookTitle").value;
        let author = document.getElementById("bookAuthor").value;
        let pages = document.getElementById("pageTotal").value;
        let readval = document.getElementById("readStatus").checked;
        
        //for checking if input is valid
        if(title.trim() != "" & author.trim() != "" & pages != "") {
            const newBook = new Book(title, author, pages, readval);
            myLibrary.push(newBook);
            bookForm.close();
            displayBooks();
            document.getElementById("bookTitle").value = "";
            document.getElementById("bookAuthor").value = "";
            document.getElementById("pageTotal").value = "";
            document.getElementById("readStatus").checked = false;
        }
        else if(title.trim() == "") {
            alert("Title is needed");
        }
        else if(author.trim() == "") {
            alert("Author is needed");
        }
        else if(pages == "") {
            alert("Number of pages is needed");
        }
        else{
            console.log("wat");
        }
    }
}

function displayBooks() {
    const displayTitle = document.createElement("p");
    const displayAuthor = document.createElement("p");
    const displayPages = document.createElement("p");
    const delButton = document.createElement("button");
    const bookDisplay = document.createElement("div");
    const toggleRead = document.createElement("button");

    bookDisplay.className = "bookDisplay";

    bookDisplay.append(toggleRead);
    bookColumn.appendChild(bookDisplay);

    for(let bookIndex = 0; bookIndex < myLibrary.length; bookIndex++) {
        
        displayTitle.innerText = myLibrary[bookIndex].title;
        displayAuthor.innerText = "by " + myLibrary[bookIndex].author;
        displayPages.innerText = myLibrary[bookIndex].pages +" pages";

        switch(myLibrary[bookIndex].readval) {
            case(false):
            toggleRead.innerText = "Unread";
            toggleRead.style.backgroundColor = "red";
            break;
            case(true):
            toggleRead.innerText = "Read";
            toggleRead.style.backgroundColor = "green";
            break;
        }

        delButton.innerText = "del";

        displayTitle.id = "displayTitle";
        displayAuthor.id = "displayAuthor";
        displayPages.id = "displayPages";
        delButton.id = "delButton";
        toggleRead.id = "toggleButton";

        bookDisplay.appendChild(displayTitle);
        bookDisplay.append(displayAuthor, displayPages, toggleRead, delButton);

        delButton.onclick = (e) => {
            Book.prototype.titleCheck(bookIndex)
            deleteBook(bookDisplay, this.bookIndex);
        }

        toggleRead.onclick = (e) => {
            Book.prototype.changeRead(bookIndex)
            switch(myLibrary[bookIndex].readval) {
                case(false):
                toggleRead.innerText = "Unread";
                toggleRead.style.backgroundColor = "red";
                break;
                case(true):
                toggleRead.innerText = "Read";
                toggleRead.style.backgroundColor = "green";
                break;
            }
        }
    }

    let randomColorR = (Math.random()*128) + 127;
    let randomColorG = (Math.random()*128) + 127;
    let randomColorB = (Math.random()*128) + 127;
    
    bookDisplay.style.backgroundColor = "rgb(" + randomColorR+ ", " + randomColorG + ", " + randomColorB + ")";
    bookColumn.appendChild(bookDisplay);
}

function deleteBook(displayed, thisbook) {
    bookColumn.removeChild(displayed);
    myLibrary.splice(thisbook, 1);
}

