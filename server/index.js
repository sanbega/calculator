const express = require("express");
const BodyParser = require("body-parser");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const app = express();
const cors = require("cors");

app.use(BodyParser.json());
app.use(errors());
app.use(cors());

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
  "/operations",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      num1: Joi.number().max(9999999999).min(-9999999999).required(),
      num2: Joi.number().max(9999999999).min(-9999999999).required(),
      operation: Joi.string().required(),
    }),
  }),
  (req, res) => {
    if (
      req.body.operation !== "/" &&
      req.body.operation !== "+" &&
      req.body.operation !== "-" &&
      req.body.operation !== "*"
    ) {
      return res.status(402).json({
        message: "Operation not valid",
      });
    }

    res.json({
      result: getResult(
        req.body.operation,
        req.body.num1,
        req.body.num2
      ).toFixed(2),
    });
  }
);

app.get("/", function (req, res) {
  res.send("Welcome to the calculator");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
