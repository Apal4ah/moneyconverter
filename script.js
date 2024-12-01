let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropDown = document.getElementById('from-currency-select');
const toDropDown = document.getElementById('to-currency-select');

// Create dropdown from the currecies array
currencies.forEach((currency) => {
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

// repeat same things for the other dropdowns
currencies.forEach((currency) => {
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});


// setting default values
fromDropDown.value = 'USD';
toDropDown.value = 'IDR';

let convertCurrency = () => {
    // create reference
    const amount = document.querySelector('#amount').value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;



    // if input field is  not empty
    if (amount.length != 0) {
        fetch(api)
            .then((resp) => resp.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];``
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
                // const content = element.innerHTML;
            });
    } else {
        alert('Tolong isi jumlah');
    }
};
document
    .querySelector('#convert-button')
    .addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);