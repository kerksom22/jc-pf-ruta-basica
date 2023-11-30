nombreUsuarioTexto = document.getElementById("nombre-usuario")
nombreUsuario = localStorage.getItem("nombre")
nombreUsuarioTexto.textContent = nombreUsuario

btn = document.getElementById("cerrar-sesion")
btn.addEventListener("click", cerrarSesion)

function cerrarSesion() {
    localStorage.removeItem("nombre")
    localStorage.removeItem("apellido")
    localStorage.removeItem("correo")
    localStorage.removeItem("contrasena")
    localStorage.removeItem("genero")

    location.href = "../index.html"
}

/* items = document.querySelectorAll('.item')

items.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('itemActivate')
    })
}); */