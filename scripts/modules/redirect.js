import { booklist, addNewBook, contactInfo } from "./elements.js";

// Redirects the page to list of books
export const redirectToList = () => {
  booklist.style.display = "flex";
  addNewBook.style.display = "none";
  contactInfo.style.display = "none";
};
