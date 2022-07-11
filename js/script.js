"use sctrict";

// alert('Hello');

// const result = confirm("Are you here ?");
// console.log(result);

// const answer = prompt('Вам есть 18лет?')

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = prompt('Ваш возраст?', ''); 

document.write(answers);


let incr = 10,
    decr = 10;
    
incr++;
decr--;

console.log(incr);
console.log(decr);