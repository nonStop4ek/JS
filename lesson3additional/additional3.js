// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    let i = 0;
    while (i < massiv.length) {
        let number = massiv[i];
        console.log(number)
        i++;
    }
}

//     2. перебрати його циклом for
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    for (let i = 0; i < massiv.length; i++) {
        const massivElement = massiv[i];
        console.log(massivElement);

    }
}


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    let i = 0;
    while (i < massiv.length) {

        if (i % 2 !== 0) {
            console.log(massiv[i])
        }
        i++;
    }
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    for (let i = 0; i < massiv.length; i++) {

        if (i % 2 !== 0) {
            console.log(massiv[i])
        }
    }


}


// 5. перебрати циклом while та вивести  числа тільки парні  значення
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    let i = 0;
    while (i < massiv.length) {
        if (massiv[i] % 2 === 0) {
            console.log(massiv[i])
        }
        i++
    }
}


// 6. перебрати циклом for та вивести  числа тільки парні  значення
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] % 2 === 0) {
            console.log(massiv[i])
        }
    }

}
// 7. замінити кожне число кратне 3 на слово "okten"


{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    for (let i = 0; i < massiv.length; i++) {
        let massivElement = massiv[i];
        if (massivElement % 3 === 0) {
            massivElement = 'okten'
            console.log(massivElement);
        }
    }
}


// 8. вивести масив в зворотньому порядку.
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

    for (let i = massiv.length - 1; i >= 0; i--) {
        console.log(massiv[i]);
    }
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    let i = massiv.length -1;
    while (i>=0) {
        let number = massiv[i];
        console.log(number)
        i--;
    }
}


// перебрати циклом while та вивести  числа тільки з непарним індексом
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    let i = massiv.length;
    while (i >=0 ) {

        if (i % 2 !== 0) {
            console.log(massiv[i])
        }
        i--;
    }
}


// перебрати циклом for та вивести  числа тільки з непарним індексом
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    for (let i = massiv.length; i >=0 ; i--) {

        if (i % 2 !== 0) {
            console.log(massiv[i])
        }
    }


}


// перебрати циклом while та вивести  числа тільки парні  значення
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    let i = massiv.length;
    while (i >=0 ) {
        if (massiv[i] % 2 === 0) {
            console.log(massiv[i])
        }
        i--
    }
}


// перебрати циклом for та вивести  числа тільки парні  значення
{
    let massiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    for (let i = massiv.length; i >=0 ; i--) {
        if (massiv[i] % 2 === 0) {
            console.log(massiv[i])
        }
    }

}


