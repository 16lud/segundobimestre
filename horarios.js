const url = `http://worldtimeapi.org/api/timezone`;
const select = document.getElementById('timezones');
const resultado = document.getElementById('resultado');

fetch(url)
.then(Response => Response.json())
.then(timezones =>{
    timezones.forEach(timezone=> {
    const option= document.createElement('option');
    option.value =timezone;
    option.textContent = timezone;
    select.appendChild(option);
    
});
});
function horarios_fusos() {
    const timezone = document.getElementById('timezones').value;
    const urltimezone = `https://worldtimeapi.org/api/timezone/${timezone}`
    fetch(urltimezone)
       .then(response => response.json())
       .then(hora => {
         let horario = hora.datetime.split('T')[1].split('.')[0];
         let div=document.createElement('div')
         div.innerHTML=`${timezone} : ${horario}`
         resultado.appendChild(div)
        
       })
 }











