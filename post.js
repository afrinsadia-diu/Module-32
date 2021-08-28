function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
loadPost();

function displayPost(posts){
    const postContainer =document.getElementById('post-container');
    // console.log(postContainer);
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('posts');
        div.innerHTML= `
        <h2>${post.id}</h2>
        <h3>${post.title}</h3>
       <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
       /*console.log(post.id);
        console.log(post.body); */
    }
}
