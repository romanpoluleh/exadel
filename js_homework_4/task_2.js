const axios = require('axios');

function convertCurrency(input_currency, amount, output_currency){
    if (amount <= 0) return "Enter value more than 0";
    if (isNaN(amount) === true) return "Incorrect value";
    let promise = new Promise(function getData(resolve, reject) {
    const ENDPOINT = 'latest';
    const ACCESS_KEY = '608bf4e9b26ee925df25a6d1f4a894cf';
    const URL_API = 'http://api.exchangeratesapi.io/' + ENDPOINT + '?access_key=' + ACCESS_KEY; //http://api.exchangeratesapi.io/latest?access_key=608bf4e9b26ee925df25a6d1f4a894cf

    resolve(axios(URL_API));

  }).then (function getData(res) {

      const { data } = res ; 
      const value = (data.rates[output_currency] * amount) / data.rates[input_currency];
      console.log(`${amount} ${input_currency} = ${value} ${output_currency}`);
  })
  
}
console.log(convertCurrency("USD", 45, "EUR"));