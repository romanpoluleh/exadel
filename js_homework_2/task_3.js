const arr =  ["НПП Прізвище Кіл-ть Приблизно","______________________в_ базіпо_Україні",
 "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК","ШЕВЧЕНКО","БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО","КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"]
 
 function isLastnameValid(lastname){
    for(symbol of lastname){
        if(symbol.charCodeAt(0)<1040 || symbol.charCodeAt(0)>1071  ) return false;
        }
        return true;
    }

 let correct_arr= arr.splice(0,2).concat( arr.filter(isLastnameValid));
alert(correct_arr);

 