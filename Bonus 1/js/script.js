"use strict";
const lista = document.querySelector('ul');

for (let num = 1; num <= 100; num ++){

    const li = document.createElement('li');

    li.append(num)

    lista.append(li)

    if(num % 15 === 0){
        li.innerHTML = 'FizzBuzz';
    }
    
    else if(num % 3 === 0){
        li.innerHTML = 'Fizz';
    }
    
    else if(num % 5 === 0){
        li.innerHTML = 'Buzz';
    }
}



