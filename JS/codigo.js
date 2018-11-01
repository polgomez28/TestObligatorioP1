$(document).ready(iniciar);
function iniciar(){
    $("#logIn").click(mostrarF);
    $("#ocultar").click(ocultarWeb);
    $("#mostrar").click(mostrarWeb);
    $("#btnLogin").click(usuarioValido);
}
var usuarios = ["polg"];
var contraseña = ["1234"];
var login;
function mostrarF(){
    $("#prueba").show(1000);
}
function ocultarF(){
    $("#prueba").hide(1000);
}
function ocultarLogin(){
    $("#loginWeb").hide(10000);
}
function mostrarWeb(){
    $("#mostrarForm").show(500);
}
function ocultarWeb(){
    $("#mostrarForm").hide(500);
}
function usuarioValido(){
    login = false;
    var userNew = $("#txtUser").val();
    var password = $("#txtPassword").val();
    login = buscarUser(userNew,password);
    if (login) {
        alert("Acceso concedido!");
        ocultarF();
        mostrarWeb();
    }else {
        alert("Acceso denegado!");
    }

}
function buscarUser(userNew,password){
    for (i = 0; i <= usuarios.length-1; i++) {
        salir = false;
        indice = 0;
        while(!salir && indice <= usuarios.length-1){
            if (usuarios[i] == userNew) {
                salir = true;
            }else {
                indice++;
            }
        }
        if (salir) {
            for (pos = 0; pos <= contraseña.length-1; pos++) {
                if (password == contraseña[i]) {
                    return true;
                }else {
                    return false;
                }

            }
        }else {
            return false;
        }
        }
}
