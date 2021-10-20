function validatePhonenNumber(phonenumber){
     phonenumber=phonenumber.split(" ").join('');
     for(let symbol of phonenumber){
     if(symbol.charCodeAt(0)>57) return false
     }
     return true;
}

console.log(validatePhonenNumber("067 734 4343"));//true
console.log(validatePhonenNumber("094 643 7432"));//true
console.log(validatePhonenNumber("083 jfvj 4554"));//false
console.log(validatePhonenNumber("Anton0938 884"));//false
console.log(validatePhonenNumber("0437348348"));//true