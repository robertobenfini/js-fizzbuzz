"use strict";
//variabile ul
const lista = document.querySelector('ul');

//ciclo for
for (let num = 1; num <= 100; num ++){

    //variabile li
    const li = document.createElement('li');

    li.append(num)

    lista.append(li)

    //multipli di 15
    if(num % 15 === 0){
        li.innerHTML = 'FizzBuzz';
        li.classList.add('red')
    }
    
    //multipli di 3
    else if(num % 3 === 0){
        li.innerHTML = 'Fizz';
        li.classList.add('green')
    }
    
    //multipli di 5
    else if(num % 5 === 0){
        li.innerHTML = 'Buzz';
        li.classList.add('yellow')
    }
}



