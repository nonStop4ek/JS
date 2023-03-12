fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>{

    for (const user of users) {
        let div = document.createElement('div')
        div.classList.add('user-info');
      let a =document.createElement('a')
        a.innerText=`${user.name} ${user.id}`
        a.href = 'user-details.html?data=' + JSON.stringify(user);
        div.appendChild(a)
        document.body.appendChild(div)
    }

})