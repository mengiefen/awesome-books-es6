import { DateTime } from "../../node_modules/luxon/build/es6/luxon.js";

// Setting the date
const date = DateTime.now();
export const formattedDate =
  date.monthLong +
  " " +
  date.day +
  "th " +
  date.year +
  ", " +
  date.toLocaleString(DateTime.TIME_WITH_SECONDS);
