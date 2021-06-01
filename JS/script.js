for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) 
        document.getElementById("numero").innerHTML += "..." + "Fizz";
    } else if (i % 5 === 0  && i % 3 === 0) {
        document.getElementById("numero").innerHTML += "..." + "buzz";  
    } else if (i % 3 === 0 && i % 5 === 0){
        document.getElementById("numero").innerHTML += "..." + "FizzBuzz";
    } else{
        document.getElementById("numero").innerHTML += "..." + i; 
    }
}