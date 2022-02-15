import { bookShelf } from './elements.js';
import book from './createNewBook.js';
import displayBook from './displayBook.js';

const drawAllBooks = () => {
  bookShelf.innerHTML = '';
  const Books = book.readBooks();

  Books.forEach((element) => {
    displayBook(element);
  });
};

export default drawAllBooks;
