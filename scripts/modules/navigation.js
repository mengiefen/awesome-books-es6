import { booklist, addNewBook, contactInfo } from './elements.js';

// Handles navigation for Single Page Application(SPA)
const handleNavigation = (target) => {
  if (target.innerHTML === 'List') {
    booklist.style.display = 'flex';
    addNewBook.style.display = 'none';
    contactInfo.style.display = 'none';
  }
  if (target.innerHTML === 'Add new') {
    booklist.style.display = 'none';
    addNewBook.style.display = 'flex';
    contactInfo.style.display = 'none';
  }
  if (target.innerHTML === 'Contact') {
    booklist.style.display = 'none';
    addNewBook.style.display = 'none';
    contactInfo.style.display = 'flex';
  }
};

export default handleNavigation;
