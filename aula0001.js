const url = `http://worldtimeapi.org/api/timezone`;
const select = document.getElementById('timezones');
const resultado = document.getElementById('resultado');

// Preenche o <select> com as opções de timezones
fetch(url)
  .then(response => response.json())
  .then(timezones => {
    timezones.forEach(timezone => {
      const option = document.createElement('option');
      option.value = timezone;
      option.textContent = timezone;
      select.appendChild(option);
    });
  });

// Função para exibir o horário do fuso horário selecionado
function exibir_horarios() {
  const timezone = document.getElementById('timezones').value; // Corrigido para 'timezones'
  const urltimezone = `https://worldtimeapi.org/api/timezone/${timezone}`;

  fetch(urltimezone)
    .then(response => response.json())
    .then(data => {
      const datetime = data.datetime;
      resultado.textContent = `Horário em ${timezone}: ${datetime}`;
    })
    .catch(error => {
      console.error('Erro ao buscar o horário:', error);
      resultado.textContent = 'Erro ao buscar o horário.';
    });
}
