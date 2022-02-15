import { DateTime } from '../../node_modules/luxon/build/es6/luxon.js';

const date = DateTime.now();
const formattedDate = `${date.monthLong} ${date.day}th ${
  date.year
}, ${date.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;

export default formattedDate;
