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
  book.setAttribute('id', bookObj.title);
  book.innerHTML = `Title: ${bookObj.title} <br>Author: ${bookObj.author}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener('click', () => removeBook(bookObj.title));
  book.appendChild(deleteBtn);
  bookList.appendChild(book);
}

const addButton = document.getElementById('add-btn')
addButton.addEventListener('click', function(){
  book = getInput()
  library.push(book);
  localStorage.setItem('library', JSON.stringify(library));
  addBook(book);
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

function removeBook(title) {
  const book = document.getElementById(title);
  book.remove();
  library = library.filter((bookObj) => bookObj.title !== title);

}
