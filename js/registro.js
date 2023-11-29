const btn = document.getElementById("registrar")
btn.addEventListener("click", guardarInformacion)

function guardarInformacion() {
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var correo = document.getElementById("correo").value
    var contrasena = document.getElementById("contrasena").value
    var genero = document.getElementById("genero").value

    localStorage.setItem("nombre", nombre)
    localStorage.setItem("apellido", apellido)
    localStorage.setItem("correo", correo)
    localStorage.setItem("contrasena", contrasena)
    localStorage.setItem("genero", genero)
}