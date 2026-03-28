const horario = document.querySelector("#horario");
const data = document.querySelector("#data");

function atualizarRelogio() {
  const dataHora = new Date();
  let hora = dataHora.getHours();
  let minutos = dataHora.getMinutes();
  let segundos = dataHora.getSeconds();

  if (hora < 10) {
    hora = "0" + hora;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  const horaFormatada = hora + ":" + minutos + ":" + segundos;
  horario.textContent = horaFormatada;

  let diaSemana = dataHora.getDay();
  let dia = dataHora.getDate();
  let mes = dataHora.getMonth();
  let ano = dataHora.getFullYear();

  switch (diaSemana) {
    case 0:
      diaSemana = "Domingo";
      break;
    case 1:
      diaSemana = "Segunda";
      break;
    case 2:
      diaSemana = "Terça";
      break;
    case 3:
      diaSemana = "Quarta";
      break;
    case 4:
      diaSemana = "Quinta";
      break;
    case 5:
      diaSemana = "Sexta";
      break;
    case 6:
      diaSemana = "Sábado";
      break;
  }

  switch (mes) {
    case 0:
      mes = "janeiro";
      break;
    case 1:
      mes = "fevereiro";
      break;
    case 2:
      mes = "março";
      break;
    case 3:
      mes = "abril";
      break;
    case 4:
      mes = "maio";
      break;
    case 5:
      mes = "junho";
      break;
    case 6:
      mes = "julho";
      break;
    case 7:
      mes = "agosto";
      break;
    case 8:
      mes = "setembro";
      break;
    case 9:
      mes = "outubro";
      break;
    case 10:
      mes = "novembro";
      break;
    case 11:
      mes = "dezembro";
      break;
  }

  const dataFormatada = diaSemana + ", " + dia + " de " + mes + " de " + ano;
  data.textContent = dataFormatada;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

const tema = document.querySelector("#tema");
const clique = tema.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  if (isDark === true) {
    tema.innerHTML = '<i class="bi bi-sun"></i>';
  } else {
    tema.innerHTML = '<i class="bi bi-moon"></i>';
  }
});
