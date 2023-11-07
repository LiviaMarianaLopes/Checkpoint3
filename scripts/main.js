

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.button-js');
    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');
    const resultado = document.querySelector('.resultado-js')
    const textoImc = document.querySelector('.imc-js')
    const div = document.querySelector('.div-js')
    button.addEventListener('click', () => {
        div.classList.add('resultado');
        const peso = parseFloat(inputPeso.value);
        const altura = parseFloat(inputAltura.value);

        const imc = peso / (altura * altura);
        textoImc.textContent = 'O seu imc é: ' + imc.toFixed(2)
        if (imc < 17) {
            resultado.textContent = 'Você está muito abaixo do peso ideal';
        }
        if (imc >= 17 && imc <= 18.49) {
            resultado.textContent = 'Você está abaixo do peso ideal';
        }
        if (imc >= 18.5 && imc <= 24.99) {
            resultado.textContent = 'Você está no peso ideal!';
        }
        if (imc >= 25 && imc <= 29.99) {
            resultado.textContent = 'Você está acima do peso';
        }
        if (imc >= 30 && imc <= 34.99) {
            resultado.textContent = 'Obsidade grau 1';
        }
        if (imc >= 35 && imc <= 39.99) {
            resultado.textContent = 'Obsidade grau 2';
        }
        if (imc >= 40) {
            resultado.textContent = 'Obsidade grau 3';
        }

    });

})
