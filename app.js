const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

// Función para validar el número telefónico
function validarTelefono(numero) {
    // Patrón de expresión regular para validar número telefónico de EE.UU.
    const patron = /^(1\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;
    return patron.test(numero);
}

// Evento para el botón de validar
checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const numero = input.value
    if(numero === ''){
        alert('Please provide a phone number')
        return
    }

    if(validarTelefono(numero)){
        results.innerHTML = `Valid US number: ${numero}`
        results.style.color = 'green';
    } else {
        results.innerHTML = `Invalid US number: ${numero}`
        results.style.color = 'red';
    }
})

 // Evento para el botón de limpiar
 clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    results.innerHTML = '';
    results.style.color = 'black';
})

// Evento para limpiar el campo de entrada al hacer clic
input.addEventListener('click', (e) => {
    e.preventDefault();
    input.value = '';
    results.innerHTML = '';
    results.style.color = 'black';
})