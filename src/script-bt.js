
///Exercício mostrar o total de cursos na tabela

const totalDeCursos = document.querySelector('.js-total-de-cursos');
const totalDeHoras = document.querySelectorAll('.js-total-de-horas');
const btnConfirmar = document.querySelector('.js-btn-confirmar');
const checkboxs = document.querySelectorAll('.js-checkbox');

const totalHoras = 0;
const totalCursos = 0;

// Função para adicionar o enento click no checbox
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      totalDeCursos.textContent = parseInt(totalDeCursos.textContent) + 1;
      totalDeHoras.forEach((hora) => {
        hora.textContent = parseInt(hora.textContent) + parseInt(checkbox.value);
      });
    } else {
      totalDeCursos.textContent = parseInt(totalDeCursos.textContent) - 1;
      totalDeHoras.forEach((hora) => {
        hora.textContent = parseInt(hora.textContent) - parseInt(checkbox.value);
      });
    }
  });
});

// Função para adicionar o evento click no botão confirmar
btnConfirmar.addEventListener('click', () => {
  if (totalDeCursos.textContent > 0) {
    alert(`Total de cursos: ${totalDeCursos.textContent}\nTotal de horas: ${Array.from(totalDeHoras).reduce((acc, hora) => acc + parseInt(hora.textContent), 0)}`);
  } else {
    alert('Nenhum curso selecionado.');
  }
}); 

