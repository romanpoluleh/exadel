const axios = require('axios');

async function currencyConverter( input_currency, amount, output_currency) {
    const res = await getData();
    if (res) {
      const { data } = res;
      return (data.rates[output_currency] * amount) / data.rates[input_currency];   
    }
}

async function getData() {
    const ENDPOINT = 'latest';
    const ACCESS_KEY = '608bf4e9b26ee925df25a6d1f4a894cf';
    const URL_API = 'http://api.exchangeratesapi.io/' + ENDPOINT + '?access_key=' + ACCESS_KEY; //http://api.exchangeratesapi.io/latest?access_key=608bf4e9b26ee925df25a6d1f4a894cf
    return axios(URL_API);
}

async function main(){
let output = await currencyConverter('USD', 400, 'BYN');
console.log(output);
}

main();