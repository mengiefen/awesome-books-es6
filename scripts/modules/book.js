export default class Book {
  constructor(title, author, id) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  Books = [];

  // Adds a single book and store in Book
  addBook() {
    this.Books.push({
      id: this.id,
      title: this.title,
      author: this.author,
    });
    return this.Books;
  }

  // Reads books from local storage
  readBooks() {
    const bookSaved = JSON.parse(localStorage.getItem('books'));
    if (bookSaved) {
      this.Books = bookSaved;
    }
    return this.Books;
  }

  // Removes a single move from local storage
  removeBook(id) {
    let Books = this.readBooks();
    Books = Books.filter((book) => book.id !== Number(id));
    this.Books = Books;
    this.writeBooks();
    return Books;
  }

  // Writes the books list into the localStorage
  writeBooks() {
    localStorage.setItem('books', JSON.stringify(this.Books));
  }

}