const submit = document

  .querySelector("#form")

  .addEventListener("submit", addBookToLibrary);

function Pop() {
  document.getElementById("main").style.display = "block";
}

function div_hide() {
  document.getElementById("main").style.display = "none";
}

let myLibrary = [];

let savedLibrary = JSON.parse(localStorage.getItem("myLibrary"));
if (savedLibrary) {
  myLibrary = savedLibrary;
}
function Book(Title, Author, Pages, Read) {
  this.Title = Title;

  this.Author = Author;

  this.Pages = Pages;

  this.Read = Read;
}

function toggle(book) {
  if (book.Read === "Read") {
    book.Read = "Not Read Yet";
  } else {
    book.Read = "Read";
  }
}
function checkRead() {
  let Read = document.getElementById("Read");

  if (Read.checked) {
    return "Read";
  } else {
    return "Not Read Yet";
  }
}

function BookRemove(book) {
  const index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  add();
}

function ToggleRead(index) {
  const MyIndex = myLibrary.indexOf(index);
  myLibrary[MyIndex].toggle();
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  add();
}

function add() {
  const booksGrid = document.getElementById("booksGrid");

  booksGrid.innerHTML = "";
  for (let book of myLibrary) {
    book.toggle = () => {
      toggle(book);
    };
    const bookCard = document.createElement("div");

    bookCard.classList.add("bookCard");

    const Title = document.createElement("p");

    Title.textContent = book.Title;

    const Author = document.createElement("p");

    Author.textContent = book.Author;

    const Pages = document.createElement("p");

    Pages.textContent = book.Pages;

    const buttonGroup = document.createElement("div");

    buttonGroup.classList.add("buttonGroup");

    const Read = document.createElement("button");

    Read.classList.add("btn");

    Read.textContent = book.Read;

    Read.onclick = () => ToggleRead(book);

    const Remove = document.createElement("button");

    Remove.classList.add("btn");

    Remove.onclick = () => BookRemove(book);

    Remove.textContent = "Remove";

    bookCard.appendChild(Title);

    bookCard.appendChild(Author);

    bookCard.appendChild(Pages);

    buttonGroup.appendChild(Read);

    buttonGroup.appendChild(Remove);

    bookCard.appendChild(buttonGroup);

    booksGrid.appendChild(bookCard);
  }
}

function addBookToLibrary(event) {
  document.getElementById("main").style.display = "none";

  const Title = document.getElementById("Title").value;

  const Author = document.getElementById("Author").value;

  const Pages = document.getElementById("Pages").value;

  const Read = checkRead();

  const newBook = new Book(Title, Author, Pages, Read);

  myLibrary.push(newBook);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  document.getElementById("form").reset();

  event.preventDefault();

  add();
}
window.addEventListener("load", () => {
  add();
});
