// daily coin quote:
const USD = 5.73;
const EUR = 6.23;
const GBP = 7.41;

// Getting the elements of the form
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

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
      break;

    case "GBP":
      convertCurrency(amount.value, GBP, "£");

    default:
      break;
  }
});

// function to convert the coin:

function convertCurrency(amount, price, symbol) {
  try {
    // updating the coin quote
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)} `;
    // to calculate the total
    let total = amount * price;

    // check is the result is not a number:
    if (isNaN(total)) {
      return alert("Please, type the correct number to convert");
    }

    // to form the total value:
    total = formatCurrencyBRL(total).replace("R$", "");

    // to show the total result
    result.textContent = `${total} Reais`;

    // aply the class the show the result
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    // remove the class that shows the result
    footer.classList.remove("show-result");
    alert("It was not possible to convert, try again later!");
  }
}

// format in brazilian reais coin:
function formatCurrencyBRL(value) {
  // Convert to number to use the toLocaleString to format in BRL standart
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
