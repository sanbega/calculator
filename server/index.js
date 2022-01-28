const express = require("express");
const BodyParser = require("body-parser");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const app = express();

app.use(BodyParser.json());

function getResult(operation, num1, num2) {
  switch (operation) {
    case "+":
      return Number(num1) + Number(num2);
      break;
    case "-":
      return Number(num1) - Number(num2);
      break;
    case "*":
      return Number(num1) * Number(num2);
      break;
    case "/":
      return Number(num1) / Number(num2);
      break;
  }
}

app.post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      num1: Joi.number().required(),
      num2: Joi.number().required(),
      operation: Joi.string(),
    }),
  }),
  (req, res) => {
    res.json({
      result: getResult(req.body.operation, req.body.num1, req.body.num2),
    });
  }
);

app.use(errors());

app.get("/", function (req, res) {
  res.send("Welcome to the calculator");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
