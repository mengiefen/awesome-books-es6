import formattedDate from './modules/date.js';
import { newDate, addButton } from './modules/elements.js';
import handleNavigation from './modules/navigation.js';
import addSingleBook from './modules/addBook.js';
import redirectToList from './modules/redirect.js';
import drawAllBooks from './modules/reRender.js';
import showError from './modules/error.js';
import book from './modules/createNewBook.js';

// Show current time
newDate.innerHTML = formattedDate;

// Renders book at page load
drawAllBooks();

// Event listener for 'Add new Button'
addButton.addEventListener('click', () => {
  const status = addSingleBook();
  if (status) {
    redirectToList();
  } else {
    showError();
  }
});

// Event listener for 'Add new Button', and Nav Items
document.body.addEventListener(
  'click',
  (event) => {
    if (event.target.className === 'nav-link') {
      handleNavigation(event.target);
    } else if (event.target.className === 'btn-remove') {
      book.removeBook(event.target.id);
      drawAllBooks();
    }
  },
  true,
);
