
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
    const readSlider = document.createElement("input");
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


        switch(myLibrary[bookIndex].readval) {
            case true:
                readSlider.checked = true;
                console.log(myLibrary[bookIndex].title + " is read");
                break;
            case false:
                readSlider.checked = false;
                console.log(myLibrary[bookIndex].title + " unread");
                break;
        }
        bookDisplay.appendChild(displayTitle);
        bookDisplay.append(displayAuthor, displayPages, readSlider, delButton);
        
        delButton.onclick = (e) => {
            deleteBook(bookDisplay, this.bookIndex)
        }
    }

    let randomColorR = (Math.random()*128) + 127;
    let randomColorG = (Math.random()*128) + 127;
    let randomColorB = (Math.random()*128) + 127;

    function deleteBook(displayed, thisbook) {
        bookColumn.removeChild(displayed);
        myLibrary.splice(thisbook, 1);
    }

    bookDisplay.style.backgroundColor = "rgb(" + randomColorR+ ", " + randomColorG + ", " + randomColorB + ")";

    displayAuthor.style.fontSize = "0.8em";
    displayPages.style.fontSize = "0.6em";

    readSlider.setAttribute("type", "checkbox");
    readSlider.style.marginTop = "auto";

    bookColumn.appendChild(bookDisplay);

}
