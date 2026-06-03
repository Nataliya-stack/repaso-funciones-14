const inputNombreValido = document.getElementById("input");
const btnValidarNombre = document.getElementById("btn");
const resultadoValidacion = document.getElementById("resultado");

const validarNombreTexto = (nombre) => {
    if (typeof nombre !== "string" || nombre.trim() === "") {
        return false;
    }

    const reglaNombre = /^[a-záéíóúüñ'\s]+$/i;

    return reglaNombre.test(nombre);
};

btnValidarNombre.addEventListener("click", () => {
    const valorNombre = inputNombreValido.value.trim(); 
    
    if (valorNombre === "") {
        resultadoValidacion.textContent = "Por favor, escriba un nombre para verificar.";
        return;
    }

    const esValido = validarNombreTexto(valorNombre);

    if (esValido === true) {
        resultadoValidacion.innerHTML = `Verdadero: <br> El nombre es totalmente válido. <br> ¡Felicidades!`;
    } else {
        resultadoValidacion.innerHTML = `Falso: <br> El nombre contiene números o caracteres no permitidos.`;
    }
});
