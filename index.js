let library = [];

function getInput() {
  const book = {};
  book.title = document.getElementById("bookTitle").value;
  book.author = document.getElementById("bookAuthor").value;
  return book
}

function addBook(bookObj) {
  const bookList = document.getElementById('book-list');
  const book = document.createElement("LI");
  book.innerHTML = bookObj.title;
  bookList.appendChild(book);
}

const addButton = document.getElementById('add-btn')
addButton.addEventListener('click', function(){
  book = getInput()
  library.push(book);
  addBook(book)
})
