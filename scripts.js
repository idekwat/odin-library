
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
    bookForm.close();
    const bookDisplay = document.createElement("div");
    const readSlider = document.createElement("input");
    const displayTitle = document.createElement("p");
    const displayAuthor = document.createElement("p");
    const displayPages = document.createElement("p");
    const delButton = document.createElement("button");

    for(let bookCount = 0; bookCount < myLibrary.length; bookCount++) {
        displayTitle.innerText = myLibrary[bookCount].title;
        displayAuthor.innerText = "by " + myLibrary[bookCount].author;
        displayPages.innerText = myLibrary[bookCount].pages +" pages";
        delButton.innerText = "del";
        switch(myLibrary[bookCount].readval) {
            case true:
                readSlider.checked = true;
                break;
            case false:
                readSlider.checked = false;
                break;
        }
        bookDisplay.appendChild(displayTitle);
        bookDisplay.append(displayAuthor);
        bookDisplay.append(displayPages);
        bookDisplay.append(readSlider);
        bookDisplay.append(delButton);
        
        delButton.onclick = (e) => {
            bookColumn.removeChild(bookDisplay);
        }
    }
    let randomColorR = (Math.random()*128) + 127;
    let randomColorG = (Math.random()*128) + 127;
    let randomColorB = (Math.random()*128) + 127;

    bookDisplay.style.textAlign = "center";
    bookDisplay.style.textWrap = "wrap";
    bookDisplay.style.height = "clamp(30vh, 35vh, 40vh)";
    bookDisplay.style.width = "clamp(30vh, 35vh, 40vh)";
    bookDisplay.style.backgroundColor = "rgb(" + randomColorR+ ", " + randomColorG + ", " + randomColorB + ")";
    bookDisplay.style.display = "inline-flex";
    bookDisplay.style.padding = "10px";
    bookDisplay.style.alignItems = "center";
    bookDisplay.style.flexDirection = "column";
    bookDisplay.style.margin = "20px";
    bookDisplay.style.borderRadius = "2px";
    bookDisplay.style.boxShadow = "6px 6px 10px gray";

    displayTitle.style.fontSize = "1.4em";
    displayTitle.style.marginTop = "10px";

    displayAuthor.style.fontSize = "0.8em";
    displayPages.style.fontSize = "0.6em";

    readSlider.setAttribute("type", "checkbox");
    readSlider.style.marginTop = "auto";

    bookColumn.appendChild(bookDisplay);

}
