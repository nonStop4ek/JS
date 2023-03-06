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

let btn = document.querySelector('button');
// let target=document.querySelector('.target')
btn.onclick = function () {
    let cart=JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(new Date())
    localStorage.setItem('cart',JSON.stringify(cart))
// target.innerText=JSON.parse(cart)



}
