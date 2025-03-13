// daily coin quote:
const USD = 4.86;
const EUR = 5.32;
const GBP = 6.08;

// Getting the elements of the form
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulating the input amount to receive just number:
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  //   check for carachters type text and will replace for nothing
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// catching the submit event of the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;

    case "EUR":
      convertCurrency(amount.value, EUR, "€");

    case "GBP":
      convertCurrency(amount.value, GBP, "£");

    default:
      break;
  }
});

// function to convert the coin:

function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol);
}
