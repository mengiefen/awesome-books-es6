const bookShelf = document.getElementById('book-shelf');
const addButton = document.getElementById('btn-add');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const booklist = document.getElementById('book-list');
const addNewBook = document.getElementById('add-new-book');
const contactInfo = document.getElementById('contact');
const newDate = document.getElementById('current-date');
const form = document.getElementsByTagName('form')[0];
const error = document.querySelector('.error');

export {
  bookShelf,
  addButton,
  titleInput,
  authorInput,
  booklist,
  addNewBook,
  contactInfo,
  newDate,
  form,
  error,
};
