let target=document.querySelector('.target')
let caart= JSON.parse( localStorage.getItem('cart'))
for (let i = 0; i < caart.length; i++) {
    const caartElement = caart[i];
    const div = document.createElement('li');
    div.innerText=caartElement
    target.append(div)

}

// for (const caartElement of caart) {
//     target.append(caartElement)
// }

// target.innerText=caart