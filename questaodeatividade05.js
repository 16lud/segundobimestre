function listar() {
    let post_id = document.getElementById('post_id').value;
    let url = `https://worldcupjson.net/matches?postId${post_id}`;

    fetch(url)
    .then((response)=> response.json())//response.json() converte  a resposta em um objeto json
    .then((json)=>list_matches(json));
    
}
function list_matches(json) {
    let resultado =document.getElementById('resultado');
    resultado.innerHTML='';
if (json && json.legth > 0){// aqui verifica se existe dados na resposta
let finalMatch = json[json.length - 1];
let campeao = finalMatch.home_team.name;
let viceCampeao = finalMatch.away_team.name;
resultado.innerHTML=`campeao:${campeao}, viceCampeao:${viceCampeao}`;

}else{

    resultado.textContent =' nada encontrado';

}
}

