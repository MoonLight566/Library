function Pop() {
	document.getElementById("main").style.display = "block";
}
function div_hide() {
	document.getElementById("main").style.display = "none";
}
const myLibrary = [];
function Book(Title, Author, Pages, Read) {
	this.Title = Title;
	this.Author = Author;
	this.Pages = Pages;
	this.Read = Read;
}
Book.prototype.toggleRead = function () {
	if (this.Read === "Read") {
		this.Read = "Not Read Yet";
	} else {
		this.Read = "Read";
	}
};
function moon() {
	let Read = document.getElementById("Read");
	if (Read.checked) {
		return "Read";
	} else {
		return "Not Read Yet";
	}
}
function BookRemove(index) {
	myLibrary.splice(index, 1);
	add();
}
function toggleRead(index) {
	myLibrary[index].toggleRead();
	add();
}

function add() {
	const booksGrid = document.getElementById("booksGrid");
	booksGrid.innerHTML = "";
	for (let i = 0; i < myLibrary.length; i++) {
		let Library = myLibrary[i];
		const bookCard = document.createElement("div");
		bookCard.classList.add("bookCard");
		const Title = document.createElement("p");
		Title.textContent = Library.Title;
		const Author = document.createElement("p");
		Author.textContent = Library.Author;
		const Pages = document.createElement("p");
		Pages.textContent = Library.Pages;
		const buttonGroup = document.createElement("div");
		buttonGroup.classList.add("buttonGroup");
		const Read = document.createElement("button");
		Read.classList.add("btn");
		Read.textContent = Library.Read;
		Read.onclick = () => toggleRead(i);
		const Remove = document.createElement("button");
		Remove.classList.add("btn");
		Remove.onclick = () => BookRemove(i);
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
	const Read = moon();
	const new1 = new Book(Title, Author, Pages, Read);
	myLibrary.push(new1);
	document.getElementById("form").reset();
	event.preventDefault();
	add();
}
