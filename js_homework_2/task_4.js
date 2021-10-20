const vovelsCounter = (str) => {
            str=str.toLowerCase();     
    	    const vovels = ['a', 'e', 'i', 'o', 'u']
    	    let counter = 0
    	    for(letter of str){
             if(vovels.includes(letter)){
                 counter = counter + 1
        	  }
    	    }
    	    return counter;
}

vovelsCounter('The current directory is AD-123');
//expected output → 8
//actual output → 7
