const hora1 = document.getElementById("hora1");
const minuto1 = document.getElementById("minuto1");
const segundo1 = document.getElementById("segundo1");
const hora2 = document.getElementById("hora2");
const minuto2 = document.getElementById("minuto2");
const segundo2 = document.getElementById("segundo2");

const somaButton = document.getElementById("soma");
const subtraiButton = document.getElementById("subtrai");
const resetButton = document.getElementById("reset");

const horaResultado = document.getElementById("horaResultado");
const minutoResultado = document.getElementById("minutoResultado");
const segundoResultado = document.getElementById("segundoResultado");

function zerarCampos() {
  hora1.value = "";
  minuto1.value = "";
  segundo1.value = "";
  hora2.value = "";
  minuto2.value = "";
  segundo2.value = "";
  horaResultado.textContent = "";
  minutoResultado.textContent = "";
  segundoResultado.textContent = "";
}

function soma() {
  const segundosTotal = Number(segundo1.value) + Number(segundo2.value);
  const minutosTotal = Number(minuto1.value) + Number(minuto2.value);
  const horasTotal = Number(hora1.value) + Number(hora2.value);

  const minutosExtras = Math.floor(segundosTotal / 60);
  const segundosRestantes = segundosTotal % 60;
  const horasExtras = Math.floor(minutosTotal / 60);
  const minutosRestantes = minutosTotal % 60;

  const resultadoHoras = horasTotal + horasExtras;
  const resultadoMinutos = minutosRestantes + minutosExtras;
  const resultadoSegundos = segundosRestantes;

  horaResultado.textContent = resultadoHoras;
  minutoResultado.textContent = resultadoMinutos;
  segundoResultado.textContent = resultadoSegundos;
}

function subtrai() {
  const segundosTotal = Number(segundo1.value) - Number(segundo2.value);
  const minutosTotal = Number(minuto1.value) - Number(minuto2.value);
  const horasTotal = Number(hora1.value) - Number(hora2.value);

  const segundosRestantes = Math.abs(segundosTotal % 60);
  const minutosExtras = Math.abs(Math.floor(segundosTotal / 60));
  const minutosRestantes = Math.abs(minutosTotal % 60);
  const horasExtras = Math.abs(Math.floor(minutosTotal / 60));

  const resultadoHoras = horasTotal - horasExtras;
  const resultadoMinutos = minutosRestantes - minutosExtras;
  const resultadoSegundos = segundosRestantes;

  horaResultado.textContent = Math.abs(resultadoHoras);
  minutoResultado.textContent = Math.abs(resultadoMinutos);
  segundoResultado.textContent = Math.abs(resultadoSegundos);
}

somaButton.addEventListener("click", soma);
subtraiButton.addEventListener("click", subtrai);
resetButton.addEventListener("click", zerarCampos);
