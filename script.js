const amount = document.getElementById("amount");

// Manipulating the input amount to receive just number:
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  //   check for carachters type text and will replace for nothing
  amount.value = amount.value.replace(hasCharactersRegex, "");
});
