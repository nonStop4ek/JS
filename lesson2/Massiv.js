// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr = ['first', 'second', 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books = {
    title: 'metro2033',
    pageCount: 233,
    genre: 'games',
    authors: [{name: 'vasya', age: 33,}, {name: 'Kolya', age: 23,}, {name: 'Leha', age: 44,}]
}
console.log(books);
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users;
users = [user1 = {name: 'Nikolai', username: 'badBoy', password: 1111},
    user2 = {name: 'Mykola', username: 'badBoy2', password: 1112},
    user3 = {name: 'Mykola2', username: 'badBoy3', password: 1113},
    user4 = {name: 'Mykola24', username: 'badBoy4', password: 1114},
    user5 = {name: 'Mykola3', username: 'badBoy5', password: 1115},
    user6 = {name: 'Mykola4', username: 'badBoy6', password: 1116},
    user7 = {name: 'Mykola7', username: 'badBoy7', password: 1117},
    user8 = {name: 'Mykola8', username: 'badBoy8', password: 1118},
    user9 = {name: 'Mykola9', username: 'badBoy9', password: 1119},
    user10 = {name: 'Mykola10', username: 'badBoy10', password: 11110},]
let passwords = user1.password + ' ' + user2.password + ' ' + user3.password + ' ' + user4.password + ' ' + user5.password + ' ' + user6.password + ' ' + user7.password + ' ' + user8.password + ' ' + user9.password + ' ' + user10.password;
console.log(passwords);
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть
// 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let num = +prompt('age');
// if(num!==0){
//     console.log("Virno");
// }else {
//     console.log('nevirno');}
{
    let x = 0;
    if (x !== 0) {
        console.log('virno');
    } else {
        console.log('nevirno');
    }
}
{
    let x = 1;
    if (x !== 0) {
        console.log('virno');
    } else {
        console.log('nevirno');
    }
}
{
    let x = -3;
    if (x !== 0) {
        console.log('virno');
    } else {
        console.log('nevirno');
    }
}

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години
{
    time = +prompt('enter time');
    if (time > 0 && time < 16) {
        console.log('1 chvert');
    } else if (time > 15 && time < 31) {
        console.log('2 chvert');
    } else if (time > 30 && time < 46) {
        console.log('3chvert');
    } else if (time > 45 && time < 59) {
        console.log('4chvert');
    } else if (time > 60) {
        console.log('not in diapazon 1-60');
    }
}
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('enter number of day');
if (day > 0 && day < 11) {
    console.log('first dekada');
} else if (day > 10 && day < 21) {
    console.log('second dekada');
} else if (day > 20 && day < 32) {
    console.log('third dekada');
} else {
    console.log('not in diapazon');
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

let rozkladOfday = +prompt('number of day');
    switch (rozkladOfday){
        case 1:
            console.log('Monday');
            break;
              case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('not diapazon');
    }


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

{
    let userEnter1 = +prompt('num1');
    let userEnter2 = +prompt('num2');
    if (userEnter1 > userEnter2) {
        console.log(userEnter1 + ' ' + 'Більше');
    } else if (userEnter2 > userEnter1) {
        console.log(userEnter2 + ' ' + 'Більше')
    } else if (userEnter2 === userEnter1) {
        console.log('вони рівні');
    }

}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної
//     х являється falsy (хибноподібні, тобто приводиться до false)

{
    let x =3 ;
    if  (0!==0 || 1!==x){
    console.log(x);}
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}

];
let cors= coursesAndDurationArray[1].monthDuration;
let cors1= coursesAndDurationArray[0].monthDuration;
let cors2= coursesAndDurationArray[2].monthDuration;
let cors3= coursesAndDurationArray[3].monthDuration;
let cors4= coursesAndDurationArray[4].monthDuration;
let cors5= coursesAndDurationArray[5].monthDuration;


    if (cors>5){
    console.log('super');
} if (cors1>5){
    console.log('super');
} if (cors2>5){
    console.log('super');
} if (cors3>5){
    console.log('super');
} if (cors4>5){
    console.log('super');
} if (cors5>5){
    console.log('super');}
