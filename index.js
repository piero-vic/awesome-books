let library = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}

function getInput() {
  const title = document.getElementById('bookTitle');
  const author = document.getElementById('bookAuthor');
  const book = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  return book;
}

function removeBook(title) {
  const book = document.getElementById(title);
  book.remove();
  library = library.filter((bookObj) => bookObj.title !== title);
  localStorage.setItem('library', JSON.stringify(library));
}

function addBook(bookObj) {
  const bookList = document.getElementById('book-list');
  const book = document.createElement('LI');
  book.setAttribute('id', bookObj.title);
  book.innerHTML = `<h3> ${bookObj.title} </h3> <p>${bookObj.author} </p>`;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', () => removeBook(bookObj.title));
  book.appendChild(deleteBtn);
  bookList.appendChild(book);
}

// Add Button
const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', () => {
  const book = getInput();
  library.push(book);
  localStorage.setItem('library', JSON.stringify(library));
  addBook(book);
});

// Load page
window.onload = () => {
  library = JSON.parse(localStorage.getItem('library' || '[]'));
  if (library === null) {
    library = [];
    return;
  }

  library.forEach((book) => {
    addBook(book);
  });
};
