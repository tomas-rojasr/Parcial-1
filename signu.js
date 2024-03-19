document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registro-form");
    const registroButton = document.getElementById("registro-button");
    const cancelButton = document.getElementById("cancelar-button");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const edad = document.getElementById("edad").value;
        const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
        const tipoSangre = document.getElementById("tipo_sangre").value;

        // Expresiones regulares para validación
        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ\s]+$/;
        const emailRegex = /^\S+@\S+\.\S+$/;
        const telefonoRegex = /^\d{10}$/;
        const edadRegex = /^(?:1[8-9]|[2-9]\d)$/; // Edad entre 18 y 99 años
        const fechaNacimientoRegex = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD

        // Validación de los campos
        if (!nombreRegex.test(nombre)) {
            alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
            return;
        }

        if (!nombreRegex.test(apellido)) {
            alert("Por favor, ingresa un apellido válido (solo letras y espacios).");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (!telefonoRegex.test(telefono)) {
            alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
            return;
        }

        if (!edadRegex.test(edad)) {
            alert("Por favor, ingresa una edad válida (entre 18 y 99 años).");
            return;
        }

        if (!fechaNacimientoRegex.test(fechaNacimiento)) {
            alert("Por favor, ingresa una fecha de nacimiento válida (formato: YYYY-MM-DD).");
            return;
        }

        // Mostrar los datos ingresados en un alert
        const mensaje = `
            Nombre: ${nombre}
            Apellido: ${apellido}
            Correo electrónico: ${email}
            Teléfono: ${telefono}
            Edad: ${edad}
            Fecha de Nacimiento: ${fechaNacimiento}
            Tipo de Sangre: ${tipoSangre}
        `;
        alert(mensaje);
    });

    cancelButton.addEventListener("click", function() {
        window.location.href = "login.html"; // Redirecciona a la página de inicio de sesión
    });
});