import { bookShelf } from './elements.js';
import book from './createNewBook.js';
import displayBook from './displayBook.js';

// Reads all books from local storage and renders the result

const drawAllBooks = () => {
  bookShelf.innerHTML = '';
  const Books = book.readBooks();

  Books.forEach((element) => {
    displayBook(element);
  });
};

export default drawAllBooks;
