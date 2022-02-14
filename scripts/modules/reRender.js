import { bookShelf } from './elements.js';
import { book } from './createNewBook.js';
import { displayBook } from './displayBook.js';

// Reads all books from local storage and renders the result
export const drawAllBooks = () => {
  bookShelf.innerHTML = '';
  const booksOnShelf = book.readBooks();
  booksOnShelf.forEach((item, index) => {
    if (index < 25) {
      displayBook(item);
    }
  });
};