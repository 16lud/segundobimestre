const url_posts ='https://jsonplaceholder.typicode.com/posts';

fetch(url_posts)
   .then(response => response.json())
   .then(posts => exibir_posts(posts));

function exibir_posts(posts){
    let postagens =document.getElementById('postagens');
    postagens.innerHTML ='';
    for (let post of posts){
        postagem =document.createElement('div');
        postagem.innerHTML=`<p>#${post.id}</p>
                            <p>usuario:#${post.userId}</p>
                            <p>titulo:#${post.title}</p>
                            <p>texto:#${post.body}</p>   
        `
        postagens.appendChild(postagem);
        
    }
}
