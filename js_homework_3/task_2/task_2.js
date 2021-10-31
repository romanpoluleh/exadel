const fs = require('fs');
let DATA_PATH="./data.json";

function createData(DATA_PATH) {
    let data = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(data);
}

function deleteDublicates(data) {
    let dublicates=[];
    data = data.filter(function (item)  {
        if (dublicates.indexOf(item["email"]) > -1)
        return false;
        else {
            dublicates.push(item["email"]);
            return true;
        }
    });
    console.log("Dublicates: ");
    console.log(dublicates);
    return data;
}

let data = createData(DATA_PATH);
data = deleteDublicates(data);

fs.writeFileSync('./result.json', JSON.stringify(data, null, 4));