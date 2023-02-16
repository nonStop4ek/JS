// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
{
    let qwe = (array) => {
        let a = array[0]
        for (let i = 0; i < array.length; i++) {
            // const arrayElement = array[i];
            if (array[0] > array[i]) {
                a = array[i]
                console.log(a);
            } else if (array[i] < array[0]) {
                console.log(a)
            }
        }

    }
    qwe([1, 2, 3, -5])
}

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
{
    let qwe = (array) => {
        let a = array[0]
        for (let i = 0; i < array.length; i++) {

            if (array[0] < array[i]) {
                a = array[i]

            } else if (array[i] < array[0]) {

            }
        }
        console.log(a);
    }
    qwe([1, 2, 3, -5,9])
}