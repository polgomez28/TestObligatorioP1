$(document).ready(iniciar);
function iniciar(){
    $("#logIn").click(mostrarLogin);
    $("#mostrar").click(mostrarTodo);
    $("#btnLogin").click(validarUsuario);
    cargarOfertas();
    //$(".contenedor").hide();
}
var usuarios = ["polg","esteban"];
var contraseña = ["1234","12345"];
var roles = ["Registrado","Admin"];
var login;
var rol;
var ofertas = {"AutoId":1,"Hospedaje":"La posada","Ubicacion":"Maldonado"
                ,"Tipo":"Hotel","Precio":800,"FinValidez":"20/02/2019"};
// Función para validar contraseña y usuario
function validarUsuario(){
    login = false;
    var userNew = $("#txtUser").val();
    var password = $("#txtPassword").val();
    login = buscarUser(userNew,password);
    if (login) {
        alert("Acceso concedido!");
    }else {
        alert("Acceso denegado!");
    }
}
//busca usuario y contraseña en sus respectivos arrays  devuelve true al procedimiento que la llamo.
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

//funciones para ocultar y mostrar contenedores
function mostrarLogin(){
    $("#contenedorOfertas").hide();
    $("#crearOfertas").hide();
    $("#crearUsuario").hide();
    $("#listadoOfertas").hide();
    $(".login-box").show();
}
function mostrarTodo(){
    $("#contenedorOfertas").show();
    $("#crearOfertas").show();
    $("#crearUsuario").show();
    $("#listadoOfertas").show();
    $(".login-box").hide();
}
//Funciones para guardar en arrays
function cargarOfertas(){
    for (var clave in ofertas) {
        masofertas = "<th>" + masofertas + clave + " : " + ofertas[clave] ;
    }
    $("#masOfertas").html(masofertas);
}
function favorita(){
    
}