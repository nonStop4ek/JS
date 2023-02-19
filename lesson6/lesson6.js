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

// {
//     let coursesAndDurationArray = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
//     ];
//
//     let sort = coursesAndDurationArray.sort((a, b) => {
//         return a.monthDuration - b.monthDuration
//
//     })
//     console.log(sort);
//
//
//     let filter = coursesAndDurationArray.filter((value) => {
//         return value.monthDuration > 5
//     })
//     console.log(filter);
//
//     let map = coursesAndDurationArray.map((value, index) => {
//         return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
//     })
//     console.log(map);
// }


// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// {
//     let arrayCards = [
//         {
//             cardSuit: 'spade',
//             value: 6,
//             color: 'black'
//         }, {
//             cardSuit: 'spade',
//             value: 7,
//             color: 'black'
//         }, {
//             cardSuit: 'spade',
//             value: 8,
//             color: 'black'
//         }, {
//             cardSuit: 'spade',
//             value: 9,
//             color: 'black'
//         }, {
//             cardSuit: 'spade',
//             value: 10,
//             color: 'black'
//         }, {
//             cardSuit: 'spade',
//             value: 'ace',
//             color: 'black'
//         }, {
//             cardSuit: 'spade',
//             value: 'jack',
//             color: 'black'
//         }, {
//             cardSuit: 'spade',
//             value: 'queen',
//             color: 'black'
//         }, {
//             cardSuit: 'spade',
//             value: 'king',
//             color: 'black'
//         }, {
//             cardSuit: 'сlubs',
//             value: 6,
//             color: 'black'
//         }, {
//             cardSuit: 'сlubs',
//             value: 7,
//             color: 'black'
//         }, {
//             cardSuit: 'сlubs',
//             value: 8,
//             color: 'black'
//         }, {
//             cardSuit: 'сlubs',
//             value: 9,
//             color: 'black'
//         }, {
//             cardSuit: 'сlubs',
//             value: 10,
//             color: 'black'
//         }, {
//             cardSuit: 'сlubs',
//             value: 'ace',
//             color: 'black'
//         }, {
//             cardSuit: 'сlubs',
//             value: 'jack',
//             color: 'black'
//         }, {
//             cardSuit: 'сlubs',
//             value: 'queen',
//             color: 'black'
//         }, {
//             cardSuit: 'сlubs',
//             value: 'king',
//             color: 'black'
//         }, {
//             cardSuit: 'diamond',
//             value: 6,
//             color: 'red'
//         }, {
//             cardSuit: 'diamond',
//             value: 7,
//             color: 'red'
//         }, {
//             cardSuit: 'diamond',
//             value: 8,
//             color: 'red'
//         }, {
//             cardSuit: 'diamond',
//             value: 9,
//             color: 'red'
//         }, {
//             cardSuit: 'diamond',
//             value: 10,
//             color: 'red'
//         }, {
//             cardSuit: 'diamond',
//             value: 'ace',
//             color: 'red'
//         }, {
//             cardSuit: 'diamond',
//             value: 'jack',
//             color: 'red'
//         }, {
//             cardSuit: 'diamond',
//             value: 'queen',
//             color: 'red'
//         }, {
//             cardSuit: 'diamond',
//             value: 'king',
//             color: 'red'
//         }, {
//             cardSuit: 'heart',
//             value: 6,
//             color: 'red'
//         }, {
//             cardSuit: 'heart',
//             value: 7,
//             color: 'red'
//         }, {
//             cardSuit: 'heart',
//             value: 8,
//             color: 'red'
//         }, {
//             cardSuit: 'heart',
//             value: 9,
//             color: 'red'
//         }, {
//             cardSuit: 'heart',
//             value: 10,
//             color: 'red'
//         }, {
//             cardSuit: 'heart',
//             value: 'ace',
//             color: 'red'
//         }, {
//             cardSuit: 'heart',
//             value: 'jack',
//             color: 'red'
//         }, {
//             cardSuit: 'heart',
//             value: 'queen',
//             color: 'red'
//         }, {
//             cardSuit: 'heart',
//             value: 'king',
//             color: 'red'
//         }
//     ]
//
//     let found = arrayCards.find((e) => e.color === 'black' && e.cardSuit === 'spade' && e.value === 'ace');
//     console.log(found);
//
//     let filter = arrayCards.filter((e) => e.value === 6)
//     console.log(filter);
//     let filterred = arrayCards.filter((e) => e.color === 'red')
//     console.log(filterred);
//     let filterDiamond = arrayCards.filter((e) => e.cardSuit === 'diamond')
//     console.log(filterDiamond);
//     let filterclubs = arrayCards.filter((e) => e.cardSuit === 'сlubs' && !e.value < 6)
//     console.log(filterclubs);
//
//     let Reduce = arrayCards.reduce((accumulator, value) => {
//         if (value.cardSuit === 'diamond') {
//             accumulator.diamond.push(value)
//             return accumulator
//         }
//         if (value.cardSuit === 'heart') {
//             accumulator.heart.push(value)
//
//         }
//         if (value.cardSuit === 'spade') {
//             accumulator.spade.push(value)
//
//         }
//         if (value.cardSuit === 'сlubs') {
//             accumulator.clubs.push(value)
//
//         }
//
//         return accumulator
//     }, {
//         spade: [], diamond: [], clubs: [], heart: []
//     })
//
//     console.log(Reduce);
// }


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// let foundSaas= coursesArray.filter((value) =>{
//
//     return  value.modules.includes('sass')} )
// console.log(foundSaas);
// let foundDocker= coursesArray.filter((value) =>{
//
//     return  value.modules.includes('docker')} )
// console.log(foundDocker);
