const fs = require('fs');
const axios = require('axios');

const DATA_PATH = './data.json';

async function main(){
    let data = createData(DATA_PATH);
    data = await convertCurrency(data);
    let datacopy = new Object(data);
    writeResult(data, datacopy);
    console.log('rabotai plz');
}

function createData(path) {
    let data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}

async function getData() {
    const ENDPOINT = 'latest';
    const ACCESS_KEY = '608bf4e9b26ee925df25a6d1f4a894cf';
    const URL_API = 'http://api.exchangeratesapi.io/' + ENDPOINT + '?access_key=' + ACCESS_KEY; //http://api.exchangeratesapi.io/latest?access_key=608bf4e9b26ee925df25a6d1f4a894cf
    return axios(URL_API);
}

async function usdToEur(){
    const res = await getData();
    if (res) {
      const { data } = res;
      return data.rates['USD'];
    }
    
    return null;
}

async function convertCurrency(data) {
    let eur = await usdToEur();
    data.data.forEach(function (item) {
        item['Currency']='EUR';
        for ( let price in item['Prices'] ) {
            item['Prices'][price] = (item['Prices'][price] / eur).toFixed(2);
        }
    });
    return data;
}

function writeResult(data, datacopy) {
    fs.writeFileSync('./result_1.json', JSON.stringify(data, null, 4));
    fs.writeFileSync('./result_2.json', JSON.stringify(datacopy, null, 4))
}

main();
