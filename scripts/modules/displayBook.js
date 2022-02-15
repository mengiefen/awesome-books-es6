import { bookShelf } from './elements.js';

const displayBook = (book) => {
  const bookHolderHTML = `    
    <h4 class="book-title"><em>"${book.title}" by <span>${book.author}</span></em> </h4>  
    <button class="btn-remove" id=${book.id}>Remove</button>`;
  const bookHolder = document.createElement('div');
  bookHolder.classList.add('book-holder');
  bookHolder.innerHTML = bookHolderHTML;
  bookShelf.appendChild(bookHolder);
};

export default displayBook;
