// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// {
//     let area   =  (a,b)=>{
//
// let c = a*b
//         document.write(`<div> ${c}</div>`);
// return c;
//     }
//
//     area(4,6);
//     area(2,8);
//     area(3,33);
// }

// // - створити функцію яка обчислює та повертає площу кола з радіусом r


// {
//     let arearkolo =
//     (radius) => {
//         let result = Math.PI * Math.pow(radius, 2);
//         document.write(`<div>    ${result}</div>`);
//         return result;
//
//     }
//
//     arearkolo(5)
//     arearkolo(2)
// }

//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// {
//     let cylinder = (h, r) => {
//         let result = 2 * Math.PI * r * h;
//         document.write(`<div>${result}</div>`)
//         return result;
//
//     }
//
//
//     cylinder(3, 4)
// }
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// {
//     let arr = (array) => {
//         for (const arrayElement of array) {
//
//             console.log(arrayElement)
//         }
//
//     }
//
//     arr([1, 2, 3, 4, 5, 6, 7, 8])
// }

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// {
//     let paragraph=(...x)=> {
//         document.write(`<div><p>${x}</p></div>`)
//
//     }
//
//     paragraph('la la la')
//     paragraph('ad','ad','ad','da')
// }
//
// // - створити функцію яка створює ul з трьома елементами li.
// // Текст li задати через аргумент всім однаковий
//
// {
//     let ulLI = (...x) => {
//         document.write(`<div>
// <ul>
// <li>${x}</li><li>${x}</li><li>${x}</li>
// </ul>
//
// </div>`)
//
//     }

//     ulLI('li', 'boo', 'foo')
//     ulLI('lid', 'bood', 'food')
//
// }

//
// // - створити функцію яка створює ul з трьома елементами li.
// // Текст li задати через аргумент всім однаковий. Кількість
// // li визначається другим аргументом, який є числовим (тут використовувати цикл)

// {
//     let  ulli=(...x)=> { document.write(`<div> <ul>`)
//         for (let i = 0; i < x.length; i++) {
//             // const yElement = x[i];
//
//
//             document.write(`<li>${x[i]}</li> `)
//         }document.write(`</ul></div>`)
//     }
//
//     ulli('wa', 'as', 'awd')
// }

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// // та будує для них список

// {
//     let NSB=(...x)=> {document.write(`<div><ul>`)
//         for (let i = 0; i < x.length; i++) {
//             // const x1 = x[i];
//
//
//             document.write(`<li>${x[i]}</li>`)
//         }document.write(` </ul></div>`)
//     }
//
//     NSB(2, 'asda', Boolean)
// }

//
// // створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// // та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// {
//     let arrayOfObjects=(array)=> {
//         for (let arrayElement of array) {
//             document.write('<div>')
//             for (let arrayElementKey in arrayElement) {
//                 document.write(`<div>${arrayElementKey} ${arrayElement[arrayElementKey]}</div>`)
//             }
//             document.write('</div> <br>')
//         }
//
//
//     }
//
//     arrayOfObjects([{id: 12, name: 'Nikita', age: 32}, {id: 23, name: 'bads', age: 12}, {
//         id: 12,
//         name: 'Nikita',
//         age: 32
//     }, {id: 23, name: 'bads', age: 12}])
// }
//
// // - створити функцію яка повертає найменьше число з масиву
//
// {
//     let returnArray=(array)=> {
//         let min = array[0];
//         // let max = min;
//         for (let i = 0; i < array.length; ++i) {
//             // if (array[i] > max) max = array[i]
//             if (array[i] < min) min = array[i]
//         }
//         console.log(min);
//
//         return min;
//
//     }
//
//     returnArray([3, 4, 2, 6, 1, -2])
// }
//
// // - створити функцію sum(arr)яка приймає масив чисел,
// // сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// {
//     let sum=(arr)=> {
//
//         let sum1 = 0
//         for (let i = 0; i < arr.length; i++) {
//             sum1 += arr[i]
//
//         }
//         console.log(sum1)
//         return sum1;
//     }
//
//     sum([1, 2, 3, 4, 5, 10])
// }
//
//
// // - створити функцію swap(arr,index1,index2).
// // Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// {
//     let swap=(arr)=> {
//         arr[0] = [arr[1], arr[1] = arr[0]][0]
//
//         console.log(arr);
//     }
//
//     swap([1, 2, 3, 4, 5, 7, 6])
// }

// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
// {
//     let exchange=(sumUAH, currencyValues, exchangeCurrency)=> {
//         if (currencyValues === 'USD') {
//             console.log( sumUAH * exchangeCurrency);
//
//         } else if (currencyValues === 'EUR') {
//             console.log( sumUAH * exchangeCurrency);
//         }
//
//     }
//
//     exchange(100, 'USD', 31)
//     exchange(120, 'EUR', 31)
// }