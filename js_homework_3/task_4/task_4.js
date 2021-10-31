String.prototype.removeSpecialCharacters = function () 
    {
      return this.replace(/[^a-zA-Z0-9А-Яа-я ]/ig, '');
    }

let str2 = "fffdf   d-----='''";
console.log("HELLO----=====".removeSpecialCharacters());
console.log(str2.removeSpecialCharacters());
 