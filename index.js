import Book from './modules/book.js';
import Store from './modules/store.js';
import Switch from './modules/switch.js';
import { DateTime } from './modules/luxon.js';
// UI Class: Handle UI Tasks

class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.book-list');

    const div = document.createElement('div');
    div.classList.add('book-item');

    div.innerHTML = `
      <p class='book-p1'>"${book.title}"</p>
      <p class='book-p1'>by</p>
      <p class='book-p1'>${book.author}</p>
      <button class='delete'>Remove</button>
    `;

    list.appendChild(div);
  }

  // remove function
  static removeBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.remove();
    }
  }

  static clearfields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book

document.querySelector('.awesome-form').addEventListener('submit', (e) => {
  // Prevent the actual submit
  e.preventDefault();

  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instantiate book
  const book = new Book(title, author);

  // Add Book to UI
  UI.addBookToList(book);

  Store.addBook(book);

  // Clear fields

  UI.clearfields();
});

// Event: remove book

document.querySelector('.book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.removeBook(e.target);

  // Remove from Store
  Store.removeBook(e.target.previousElementSibling.textContent);
});

// Event listener for One Page app

document.querySelectorAll('.nav-a').forEach((link) => {
  link.addEventListener('click', () => {
    Switch.changeForm(link.textContent);
  });
});

const dateLive = document.querySelector('.date');
const time = () => {
  const now = DateTime.now();
  dateLive.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

setInterval(time, 10);
