let library = [];

function getInput() {
  const book = {};
  book.title = document.getElementById("bookTitle").value;
  book.author = document.getElementById("bookAuthor").value;
  library.push(book);
}

function addBook(bookObj) {
    const bookList = document.getElementById('book-list')
    const book = document.createElement("LI");
    book.innerHTML = bookObj.title
    bookList.appendChild(book)
}
