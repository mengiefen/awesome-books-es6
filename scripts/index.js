import { formattedDate } from "./modules/date.js";
import { newDate, addButton } from "./modules/elements.js";
import { handleNavigation as navigate } from "./modules/navigation.js";
import { addSingleBook } from "./modules/addBook.js";
import { redirectToList } from "./modules/redirect.js";
import { drawAllBooks as renderPage } from "./modules/reRender.js";

// Show current time
newDate.innerHTML = formattedDate;

// Renders book at page load
renderPage();

// Event listener for 'Add new Button'
addButton.addEventListener("click", () => {
  addSingleBook();
  redirectToList();
});

// Event listener for 'Add new Button', and Nav Items
document.body.addEventListener(
  "click",
  (event) => {
    if (event.target.className === "nav-link") {
      navigate(event.target);
    }
  },
  true
);
