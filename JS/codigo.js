$(document).ready(iniciar);
function iniciar(){
    $("#logIn").click(mostrarLogin);
    $("#mostrar").click(mostrarTodo);
    $("#btnLogin").click(validarUsuario);
    $("#btnCrearOferta").click(cargarOfertas);
    $("#hosTipo").html(cargoTiposHospedajes());
    //$(".contenedor").hide();
}
var usuarios = ["polg","esteban"];
var contraseña = ["1234","12345"];
var roles = ["Registrado","Admin"];
var login;
var rol;


var ofertas = [{"Id": 1, "Hospedaje": "La posada", "Ubicacion": "Maldonado"
        , "Tipo": "Hotel", "Precio": 800, "FinValidez": "20/02/2019"},
    {"Id": 2, "Hospedaje": "Las rosas", "Ubicacion": "Florida"
        , "Tipo": "Hotel", "Precio": 1200, "FinValidez": "20/02/2019"},
    {"Id": 3, "Hospedaje": "El Ciclon", "Ubicacion": "Durazno"
        , "Tipo": "Hostel", "Precio": 500, "FinValidez": "12/03/2019"}];


var hospedajes = [{"tipo":1, "nombre":"Hotel"},
                  {"tipo":2, "nombre":"Hostel"},
                  {"tipo":3, "nombre":"Casa"},
                  {"tipo":4, "nombre":"Apartamento"}];

//Funcion para autonumerado de ID en ofertas o reservas
function autoIdOfertas(oferta){
    var tmpOfertas;
    var nuevoId = 0;
    if (oferta) {
        for (pos = 0; pos <= ofertas.length-1; pos++) {
        tmpOfertas = ofertas[pos];
        if (tmpOfertas[Id] > nuevoId) {
            nuevoId = tmpOfertas[id];
        }
    }
    }else {
        // código para autonumerar id reservas
    }
    nuevoId = nuevoId + 1;
    return nuevoId;
}
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
//Función para cargar las combox de tipos hospedajes
function cargoTiposHospedajes(){
	var tmpHospedaje={}, opciones="";
	for(pos=0; pos<=hospedajes.length-1; pos++){
		tmpHospedaje = hospedajes[pos];
		opciones = opciones + "<option value='" + tmpHospedaje["tipo"];
		opciones = opciones + "'>" + tmpHospedaje["nombre"] + "</option>";		
	}
	return opciones;
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
    var autoId = 0;
    var existe = true;
    /*
    var tmpofertas;
    var existe = false;
    var tmpofertas = {};
    var nombreHosp = $("#txtNombreHosp").val();
    var ubicacion = $("#txtUbicacion").val();
    var tipoHosp = $("#hosTipo").val();
    var precioOferta = $("#txtPrecio").val();
    var fechaVal = $("#fechaValidez").val();
    if (precioOferta) {
        existe = buscarOferta(nombreHosp);
        if (existe) {
            autoId = autoIdOfertas(existe);
            alert(autoId);
        }
    }
    */
   autoId = autoIdOfertas(existe);
            alert(autoId);
}
function buscarOferta(nombreHosp){
    var tmphospedaje;
    var existe = false;
    for (pos = 0; pos <= ofertas.length-1; pos++) {
        tmphospedaje = ofertas[pos];
        if (tmphospedaje[Hospedaje] == nombreHosp) {
            existe = true;
        }
    }
    return existe;
}
