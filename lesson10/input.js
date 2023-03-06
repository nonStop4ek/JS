// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати
// данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився
// блок з вашим об'єктом
// let result= document.querySelector('.result')
// let form1=document.forms[0]
//
// form1.addEventListener('submit',function (eo) {
//     eo.preventDefault()
//     result.innerText=`${form1.name.value} `
// })
// form1.addEventListener('submit',function (eo) {
//     eo.preventDefault()
//     result.append(`${surname.value} `)
// })
// form1.addEventListener('submit',function (eo) {
//     eo.preventDefault()
//     result.append(age.value)
// })

// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// localStorage.setItem('key', '1');
// let key1=localStorage.getItem('key')
// let key=JSON.parse(key1)
// let ley=key++
// title.innerText=`${ley}`

// let target=document.querySelector('.target')
// let key = localStorage.getItem('key1');
// if (!key){
//     key=0
// }
// key = parseInt(key) + 1;
//
// localStorage.setItem('key1',key)
//
// target.innerText=key



// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна)
// , при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// let btn = document.querySelector('button');
//
// btn.onclick = function () {
//     let cart=JSON.parse(localStorage.getItem('cart'))||[]
//     cart.push(new Date())
//     localStorage.setItem('cart',JSON.stringify(cart))
// }

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//  Не працює ще

// function createObjects(num) {
//     let objects = [];
//
//     for (let i = 0; i < num; i++) {
//         let obj = {
//             id: i,
//             name: `Object ${i}`,
//             value: Math.random() * 100
//         };
//         objects.push(obj);
//     }
//
//     return objects;
// }
// // let ovj= objects[10]
// let objects = createObjects(100);
// console.log(objects);
//
// // cart.push(objects)
// // target.innerText=
// let target=document.querySelector('.target')
// let cart = parseInt(localStorage.getItem('cart'))||0
//
// function first10(ind) {
//     for (let i = ind; i < ind+10; i++) {
//         let obj = objects[i];
//         let div= document.createElement('div')
//         div.textContent=`${obj.id} ${obj.name} ${obj.value}`
//         target.append(div)
//     }
// }
// first10(cart)
//  let next=document.getElementById('next')
// next.addEventListener('click',function () {
//     // eo.preventDefault()
//     cart += 10;
//     if (cart>=objects.length){
//         cart=0
//     }
//
// })
// first10(cart)
// localStorage.setItem('cart',cart)