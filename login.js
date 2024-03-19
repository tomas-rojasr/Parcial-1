document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button"); // Nuevo botón
    const cancelButton = document.getElementById("cancel-button");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        console.log("Usuario:", username);
        console.log("Contraseña:", password);
        // Aquí puedes agregar la lógica para autenticar al usuario
    });

    signupButton.addEventListener("click", function() { // Nuevo evento para el botón Sign Up
        window.location.href = "signu.html"; // Redirecciona a la página de registro
    });

    cancelButton.addEventListener("click", function() {
        window.location.href = "inicio.html"; // Redirecciona a la página de inicio
    });
});