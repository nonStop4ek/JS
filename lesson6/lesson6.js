// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// {
    // let str = 'hello world';
    // let str1 = 'lorem ipsum';
    // let str2 = 'javascript is cool';
    // console.log(str.startsWith('hello'));
    // console.log(str1.startsWith('lorem'));
    // console.log(str2.startsWith('java'));
    // console.log(str.length);
    // console.log(str1.length);
    // console.log(str2.length);
// }


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// {
    // let str = 'hello world';
    // let str1 = 'lorem ipsum';
    // let str2 = 'javascript is cool';
    //
    // console.log(str.toUpperCase());
    // console.log(str1.toUpperCase());
    // console.log(str2.toUpperCase());
// }

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// {
//     let str = 'hello world';
//     let str1 = 'lorem ipsum';
//     let str2 = 'javascript is cool';
//     console.log(str.toLowerCase());
//     console.log(str1.toLowerCase());
//     console.log(str2.toLowerCase());
// }

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// {
//     let str = ' dirty string ';
//     console.log(str);
//     console.log(str.replaceAll(' ', ''));
// }


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// {
//    let str = 'Ревуть воли як ясла повні';
// // console.log(str.split(' '));
//    let stringToarray = (arr) => {
//       return arr.split(' ');
//
//
//    }
//    console.log(stringToarray(str));
// }

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// {
//   let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//   let map = array.map(value => {
//     return value.toFixed()
//   })
//   console.log(map)
// }

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до
// меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// {
//     let nums = [11, 21, 3]
//     console.log(nums.sort((a, b) => a - b));
//     console.log(nums.sort((a, b) => b - a));
// }

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort=coursesAndDurationArray.sort((a,b)=>{
    return a.monthDuration - b.monthDuration
})
console.log(sort);

let monthDuration1 = coursesAndDurationArray.monthDuration;
console.log(monthDuration1.filter >= 5);
