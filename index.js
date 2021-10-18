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
  book.innerHTML = `Title: ${bookObj.title} <br> Author: ${bookObj.author}`;
  bookList.appendChild(book);
}

const addButton = document.getElementById('add-btn')
addButton.addEventListener('click', function(){
  book = getInput()
  library.push(book);
  addBook(book);
  localStorage.setItem('library', JSON.stringify(library));
})

window.onload = function(){
  library = JSON.parse(localStorage.getItem('library' || '[]'));
  if (library === null){
    library = [];
    return
  }

  library.forEach((book) => {
    addBook(book);
  })
}
