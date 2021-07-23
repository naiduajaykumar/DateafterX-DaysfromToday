const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  /*date variable will have today's date*/

  const newDate = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  /*addDays object will given 100 to the date variable*/
  /*Here the newDate will store the date in this format (2021-10-31T07:13:06.027Z) */

  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
