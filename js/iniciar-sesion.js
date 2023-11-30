const btn = document.getElementById("iniciar-sesion")
btn.addEventListener("click", iniciarSesion)

function iniciarSesion() {
    console.log("sí me ejecuto")
    var correo = document.getElementById("correo").value
    var contrasena = document.getElementById("contrasena").value

    if (correo == localStorage.getItem("correo") && contrasena == localStorage.getItem("contrasena")) {
        location.href = "inicio.html"
    } else {
        alert("Correo o contraseña incorrecta")
    }
}
