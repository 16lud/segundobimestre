const url_final =`https://worldcupjson.net/matches`
fetch(url_final)
.then(response => response.json())
.then(finais => exibir_final(finais));

function mostrar_final(finais){
    let resultado = document.getElementById('resultado');
for (let final of finais){
    if(final.stage_name == "final"){
        let div= document.createElement('div');
        let campeao;
        if (final.winner == final.home_team.name){
            campeao=`campeão:<br>${final.home_team.name}</b><br><br>
            vice-campeao: <br>${final.away_team.name}`
            
        }else{
           campeao=`campeão: <br>${final.away_team.name}</br><br><br>
           vice-campeão: <br>${final.home_team.name}`
        }
        div.innerHTML=`${final.home_team_country} ${final.home_team.goals}(${final.home_team.penalties}) X
        (${final.away_team.penalties}) ${final.away_team.goals} ${final.away_team_country}
        <br> <br>${campeao}  `;
        resultado.appendChild(div)
    }
}}