function getRandomInt(min, max) {//функция для рандома чисел на промежутке [min,max)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

function pinCodeGenerator(length) {
    let array_pincode=[],rand=0;
    for(let i=0;i<length;i++){
        rand=getRandomInt(0,10);
        array_pincode.push(rand);
    } 
    return array_pincode.join("");
  }

let pincode=pinCodeGenerator(5);
console.log(pincode);

