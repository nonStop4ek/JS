let url = new URL (location.href)
let json= url.searchParams.get('data')
let post=JSON.parse(json)

const details =document.querySelector('.post-details')
details.innerHTML=` 
        <p class="post-userId">userId ${post.userId}</p>
    <p class="post-id">Id: ${post.id}</p>
    <p class="post-title">title: ${post.title}</p>
    <p class="post-body">body: ${post.body}</p>
`


fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then( response=>response.json())
    .then(comments=>{

        for (const comment of comments) {
            const details2 =document.querySelector('.comments-details')
            details2.innerHTML=` 
             <p class="comment-userId">userId ${comment.postId}</p>
    <p class="comment-id">Id: ${comment.id}</p>
    <p class="comment-name">name: ${comment.name}</p>
    <p class="comment-email">email: ${comment.email}</p>
    <p class="comment-body">body: ${comment.body}</p>
            
            
            `


        }



    })