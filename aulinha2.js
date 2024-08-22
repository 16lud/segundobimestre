let post_id = 2;
let url ='https://jsonplaceholder.typicode.com/comments?postId=${post_id}';


fetch(url)
   .then ((response) => response.json())
   .then((json) => list_comments(json));

   function list_comments(json){ 
    let comments =document.getElementById('resultado');
  comments.innerHTML='';
for(let comment of json) {
    resultado.innerHTML = `#ID: ${comment.id}<br>
            nome: ${comment.name}</br>
        E-Mail    
    
    
    `
      console.log(comment.id);
      console.log(comment.name);
      console.log(comment.email);
      console.log(comment.title);
      




}
   }
