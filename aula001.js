const url = `http://worldtimeapi.org/api/timezone`;
const select = document.getElementById('timezones');
const resultado = document.getElementById('resultado');

fetch(url)
 .then(response => response.json())
 .then(timezones =>{
    timezones.forEach(timezone=> {
        const option= document.createElement('option');
        option.value =timezone;
        option.textContent = timezone;
        select.appendChild(option);
        
    });
 });
 
 function exibir_horarios() {
    const timezone = document.getElementById('timezone').value;
    const urltimezone = `https://worldtimeapi.org/api/timezone/${timezone}`

    fetch(urltimezone)
       .then(response => response.json())
       .then(hora => {
        
       })
 }

