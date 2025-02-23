
const myLibrary = []; //Array container for books

//for referncing html tags
const newButton = document.getElementById("addButton");
const bookForm = document.getElementById("newBook");
const submitData = document.getElementById("submitButton");
const bookColumn = document.querySelector(".bookList");
const myBooks = document.getElementById("myBooks");

//Book constructor
function Book(title, author, pages, readval) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readval = readval;
}

//prototype for toggling if Book is read/unread
Book.prototype.changeRead = function(thisbook) {
    myLibrary[thisbook].readval = !myLibrary[thisbook].readval;
    isBookRead(myLibrary[thisbook].readval);
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
        else {
            alert("please complete the damn form");
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
        
        console.log(myLibrary.length);
        displayTitle.innerText = myLibrary[bookIndex].title;
        displayAuthor.innerText = "by " + myLibrary[bookIndex].author;
        displayPages.innerText = myLibrary[bookIndex].pages +" pages";
        toggleRead.innerText = myLibrary[bookIndex].readval;
        delButton.innerText = "del";

        displayTitle.id = "displayTitle";
        displayAuthor.id = "displayAuthor";
        displayPages.id = "displyPages";
        delButton.id = "delButton";
        toggleRead.id = "toggleButton";

        bookDisplay.appendChild(displayTitle);
        bookDisplay.append(displayAuthor, displayPages, toggleRead, delButton);

        delButton.onclick = (e) => {
            deleteBook(bookDisplay, this.bookIndex);
        }
        toggleRead.onclick = (e) => {
            const toggle = bookIndex;
            Book.prototype.changeRead(toggle)
            console.log(myLibrary);
            toggleRead.innerText = myLibrary[toggle].readval;
        }
    }

    let randomColorR = (Math.random()*128) + 127;
    let randomColorG = (Math.random()*128) + 127;
    let randomColorB = (Math.random()*128) + 127;
    
    bookDisplay.style.backgroundColor = "rgb(" + randomColorR+ ", " + randomColorG + ", " + randomColorB + ")";
    bookColumn.appendChild(bookDisplay);
}

function isBookRead(readthis) {
    switch(readthis){
        case(true):
        return "read";
        case(false):
        return "unread";
    }
}

function deleteBook(displayed, thisbook) {
    console.log(thisbook)
    bookColumn.removeChild(displayed);
    myLibrary.splice(thisbook, 1);
}

