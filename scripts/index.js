import { formattedDate } from "./modules/date.js";
import { newDate } from "./modules/elements.js";
import { handleNavigation as navigate } from "./modules/navigation.js";
// Show current time
newDate.innerHTML = formattedDate;

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
