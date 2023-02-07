// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
{
    let users = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
    for (let i = 0; i < 10; i++) {
        let user = users[i];
        document.write(`<div> ${user}</div>`)

    }
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
{
    let users2 = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
    for (let i = 0; i < 10; i++) {
        // let user = users2[i];
        document.write(`<div> ${users2[0]}</div>`)

    }
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
{
    let text = ['qwe', 'asd', 'zxc', 'vbn', 'fgh', 'rty', 'uio', 'vbn', 'zxcc', 'qwe', 'asd', 'zxc', 'vbn', 'fgh', 'rty', 'uio', 'vbn', 'zxcc', 'sdx', 'iqw']
    let i = 0;
    while (i < text.length) {
        document.write(`<h6>${text[i]}</h6>`);

        i++;
    }
}

document.write(`<div><hr>  </div>`);
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
{
    let text1 = ['qwe', 'asd', 'zxc', 'vbn', 'fgh', 'rty', 'uio', 'vbn', 'zxcc', 'qwe', 'asd', 'zxc', 'vbn', 'fgh', 'rty', 'uio', 'vbn', 'zxcc', 'sdx', 'iqw']
    let i = 0;

    while (i < text1.length) {
        document.write(`<h6>${text1[1]}</h6>`)
        i++;
    }
}
document.write(`<div><hr>  </div>`);
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
// {
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++) {
    const listOfItem = listOfItems[i];
    document.write(`<div> <ul><li>${listOfItems[i]}</li></ul></div>`)
}
document.write(`<div><hr>  </div>`);
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i = 0; i < products.length; i++) {
    const product = products[i];

    document.write(`<div class="product-card">
<img src="${product.image}" alt="" width="200px" height="200px" class="product.image">
<h4 class="product-title">${product.title} </h4> 
<h4 class="product-price"> coast: ${product.price} -UAN</h4> 







</div>` )


}


