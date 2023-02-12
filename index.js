let elform = document.querySelector(".js-form-fizzbuzz");
let elinput = document.querySelector(".js-input-fizzbuzz");
let elalert = document.querySelector(".js-result-fizzbuzz");

elform.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let inputValue = elinput.value;
    var newStr = "";
    if (inputValue % 3 == 0) {
        newStr += "Fizz";
    }
    else if (inputValue % 5 == 0) {
        newStr += "Buzz";
    }
    elalert.textContent = newStr || `${inputValue} soni 3 ga ham 5 ga ham bo'linmaydi`;
})


//===================================================================================================================//


let elFormCurrency = document.querySelector(".js-form-currency");
let elInputCurrency = document.querySelector(".js-input-currency");
let elSelectCurrency = document.querySelector(".js-select-currency");
let elResultText = document.querySelector(".js-result");

elFormCurrency.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let elCurrencyInputValue = Number(elInputCurrency.value.trim());
    let elCurrencySelectValue = Number(elSelectCurrency.value.trim());

    elResultText.textContent = elCurrencyInputValue * elCurrencySelectValue;
})


//===================================================================================================================//


let elFindNUmberForm = document.querySelector(".js-form-find");
let elFindNUmberInput = document.querySelector(".js-input-find");
let elAttemptCount = document.querySelector(".js-attempt-count");
let elResultTextFind = document.querySelector(".js-result-number");
let elFindBtn = document.querySelector(".js-find-btn");

var randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

var maxAttemptNumber = 6;

elAttemptCount.textContent = `Urinishlar soni ${maxAttemptNumber} ta`;

elFindNUmberForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    var elInputValue = Number(elFindNUmberInput.value);
    maxAttemptNumber--;

    elAttemptCount.textContent = `Urinishlar soni ${maxAttemptNumber} ta qoldi`;

    if (elInputValue > randomNumber) {
        elResultTextFind.textContent = "Kiritgan raqamingiz ixtiyoriy kiritgan sondan katta";
        elResultTextFind.classList.add("alert-danger");
    }else if (elInputValue < randomNumber) {
        elResultTextFind.textContent = "Kiritgan raqamingiz ixtiyoriy kiritgan sondan kichik";
        elResultTextFind.classList.remove("alert-danger");
        elResultTextFind.classList.add("alert-warning");
    }else {
        elResultTextFind.textContent = `Urra Siz topdingiz !!!`;
        elResultTextFind.classList.remove("alert-warning");
        elResultTextFind.classList.add("alert-success");
    }

    if (maxAttemptNumber == 0) {
        elFindNUmberInput.disabled = true;
        elAttemptCount.textContent = "Urinishlar soni tugadi !!!!!";

        elAttemptCount.classList.add("alert-danger");
    }
})