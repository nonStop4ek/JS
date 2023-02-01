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
let books={
    title: 'metro2033',
    pageCount: 233,
    genre: 'games',
    authors: [{name:'vasya',age:33,},{name:'Kolya',age:23,},{name:'Leha',age:44,}]
}
console.log(books);
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users;
users=[user1={name:'Nikolai',username:'badBoy',password:1111},
       user2={name:'Mykola',username:'badBoy2',password:1112},
       user3={name:'Mykola2',username:'badBoy3',password:1113},
       user4={name:'Mykola24',username:'badBoy4',password:1114},
       user5={name:'Mykola3',username:'badBoy5',password:1115},
       user6={name:'Mykola4',username:'badBoy6',password:1116},
       user7={name:'Mykola7',username:'badBoy7',password:1117},
       user8={name:'Mykola8',username:'badBoy8',password:1118},
       user9={name:'Mykola9',username:'badBoy9',password:1119},
       user10={name:'Mykola10',username:'badBoy10',password:11110},]
console.log(users[0].password,users[1].password,users[2].password,users[3].password,users[4].password,users[5].password,users[6].password,users[7].password,users[8].password,users[9].password);
