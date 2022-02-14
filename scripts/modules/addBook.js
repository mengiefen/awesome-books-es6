import { displayBook } from "./displayBook.js";
import {book } from "./createNewBook.js";
import { titleInput, authorInput, form } from "./elements.js";

// Add single book and writes to local storage
const addSingleBook = () => {
  book.title = titleInput.value;
  book.author = titleInput.value;
  book.id = Date.now();
  if (titleInput.value !== '' && authorInput.value !== '') {
    book.addBook();
    book.writeBooks();
    displayBook({
      title: titleInput.value,
      author: authorInput.value,
    });
    form.reset();
  }
};

export {
  addSingleBook
};