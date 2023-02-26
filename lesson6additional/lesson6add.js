// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
console.log( str = 'наслаждение'.split('',10))
function cutString(str,n) {
  return  str.split(n)

}

console.log(cutString('наслаждение',3));

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';

// document.writeln(delete_characters(str, 7)); // Каждый


// {
//     let str = 'Каждый охотник желает знать';
//
//     console.log(str.slice(0, 7));
// }