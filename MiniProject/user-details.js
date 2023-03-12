let url = new URL(location.href);
let json= url.searchParams.get('data')
let user = JSON.parse(json);


const details =document.querySelector('.user-details')
details.innerHTML = `<h2 class="user-name">Name: ${user.name}</h2 
                         <p class="user-id">Id: ${user.id}</p> 
                         <p class="user-email">Email: ${user.email}</p>
                         <p class="user-phone">Phone: ${user.phone}</p>
                         <p class="user-website">Website: ${user.website}</p>
                         <p class="user-address">Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                         <p class="user-company">Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>`

let a =document.getElementById('btn')
// let postsList = document.getElementById('posts-list');

a.addEventListener('click',()=>{


fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
.then( response=>response.json())
.then(posts=>{

    for (const post of posts) {
        let div = document.createElement('div')
        div.classList.add('post-info');
        let a=document.createElement('a')
        a.innerText=`${post.title}`
        a.href = 'post-details.html?data=' + JSON.stringify(post);
        div.appendChild(a)
        document.body.appendChild(div)
    }


})
})
