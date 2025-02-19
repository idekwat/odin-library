
const myLibrary = [];
const newBook = document.getElementById("addButton");
const bookForm = document.getElementById("newBook");
const submitData = document.getElementById("submitButton");
const bookColumn = document.querySelector(".bookList");
const pageSlider = document.getElementById("pageTotal");


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
    const newBook = new Book(title, author, pageSlider.value);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const bookDisplay = document.createElement("div");
    const readSlider = document.createElement("input");
    readSlider.setAttribute("type", "range");
    for(let bookCount = 0; bookCount < myLibrary.length; bookCount++) {
        bookDisplay.className = "bookInfo";
        bookDisplay.innerHTML = myLibrary[bookCount].title + "\r\n";
        bookDisplay.innerHTML += "by " + myLibrary[bookCount].author +
                                "" + myLibrary[bookCount].pagenum + "pages" + 
                                "Reading Status:" + myLibrary[bookCount].isread;
    }
    bookDisplay.style.textAlign = "center";
    bookDisplay.style.fontSize = "1.2em";
    bookDisplay.style.textWrap = "wrap";
    bookDisplay.style.height = "36vh";
    bookDisplay.style.width = "24vh";
    bookDisplay.style.backgroundColor = "aqua";
    bookDisplay.style.display = "inline-block";
    bookDisplay.style.margin = "2vh";
    bookColumn.appendChild(bookDisplay);
}