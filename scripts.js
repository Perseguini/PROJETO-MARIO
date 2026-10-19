/*

            Objetivo: quando clicar no botão, mostrar o formulario e a mascara.
            1 - Qual botão clicar?
            2 - Qual Formulario mostrar?    
            3 - Qual mascara mostrar?
            4 - Oque é "mostrar"?
                -  Trazer o formulario da esquerda pra direita,
                -  Centralizar o formatulario na tela,
                -  Exibir a Mascara de fundo.
*/

const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

