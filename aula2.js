let post_id = 2;
let url ='https://jsonplaceholder.typicode.com/comments?postId=${post_id}';


fetch(url)
   .then ((response) => response.json())
   .then((comments) => list_comments(comments));

   function list_comments(comments){
  let comments =document.getElementById('comments');
  comments.innerHTML='';
  for(let comment of comments ){
    comment= document.createElement('div');
    comment.innerHTML=`<p>#${post.id}</p>
                       <usuarios>#${post.postId}</p>
                       <name>#${post.name}</p>
                       <email>#${post.email}</p>
                       <body>#${post.body}</p>
    `
    comments.appendChild(comment);
  }

   }
