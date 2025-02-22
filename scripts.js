
const myLibrary = [];
const newButton = document.getElementById("addButton");
const bookForm = document.getElementById("newBook");
const submitData = document.getElementById("submitButton");
const bookColumn = document.querySelector(".bookList");
const myBooks = document.getElementById("myBooks");


function Book(title, author, pages, readval) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readval = readval;
    return this;
}

newButton.onclick = (e) => {
    addBook();
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
    const displayTitle = document.createElement("p");
    const displayAuthor = document.createElement("p");
    const displayPages = document.createElement("p");
    const delButton = document.createElement("button");
    const toggleRead = document.createElement("button");

    const bookDisplay = document.createElement("div");

    bookDisplay.className = "bookDisplay";

    console.log(myLibrary);


    
    /*
    for(let bookIndex = 0; bookIndex < myLibrary.length; bookIndex++) {
        
        displayTitle.innerText = myLibrary[bookIndex].title;
        displayAuthor.innerText = "by " + myLibrary[bookIndex].author;
        displayPages.innerText = myLibrary[bookIndex].pages +" pages";
        delButton.innerText = "del";

        let bookread = myLibrary[bookIndex].readval;

        displayTitle.id = "displayTitle";
        displayAuthor.id = "displayAuthor";
        displayPages.id = "displyPages";
        delButton.id = "delButton";

        switch(bookread) {
            case(true):
            toggleRead.innerText = bookread;
            break;
            case(false):
            toggleRead.innerText = bookread;
            break;
        }

        bookDisplay.appendChild(displayTitle);
        bookDisplay.append(displayAuthor, displayPages, delButton, toggleRead);

        delButton.onclick = (e) => {
            deleteBook(bookDisplay, this.bookIndex);
        }

        toggleRead.onclick = (e) => {
            Book.prototype.changeRead(bookread);
        }

        let randomColorR = (Math.random()*128) + 127;
        let randomColorG = (Math.random()*128) + 127;
        let randomColorB = (Math.random()*128) + 127;
        
        bookDisplay.style.backgroundColor = "rgb(" + randomColorR+ ", " + randomColorG + ", " + randomColorB + ")";
        bookColumn.appendChild(bookDisplay);
    } */
}

function deleteBook(displayed, thisbook) {
    bookColumn.removeChild(displayed);
    myLibrary.splice(thisbook, 1);
}

Book.prototype.changeRead = function(bookread) {
    bookread = !bookread;
    console.log(bookread);
}