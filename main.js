// Prueba para ckequear si la ruta esta bien
/* let prueba_linkeo = "este .js esta bien linkeado";
alert(prueba_linkeo); */


// Funcion para chequear si el usuario puede acceder a la web, bajo el requisito de ser mayor de edad
function chequeoEdad() {

    let nombre_user = prompt("Ingresa tu nombre de usuario");
    let permitir_acceso = confirm("¡Hola, " + nombre_user + "! Para poder acceder a nuestra página web, es necesario ser mayor de edad. ¿Sos mayor de edad?");

    // En el caso de que de al boton cancelar del confirm
    if (permitir_acceso == false)

        alert("¡Que lastima que no lo seas! No podemos dejarte ingresar, es un sitio web de bebidas alcoholicas");

    // En el caso de que de al boton aceptar del confirm
    else {

        // Pedimos que ingrese edad para validar
        let edad = prompt ("Para validar el paso anterior, necesitamos que ingreses tu edad");
        edad = parseInt(edad);

        // Bucle para que el usuario pueda ingresar la edad correctamente
        while (isNaN(edad) || edad === "") {
            
            alert("Por favor, ingresá una edad que sea válida");
            edad = prompt ("Para validar el paso anterior, debes ingresar tu edad en formato numero. Ej: 22");
        
        }
        
        // Validamos si el usuario es mayor de edad
        if (edad >= 18) {

            alert("¡Bienvenido, " + nombre_user + "! Puedes acceder a nuestra web y disfrutar de los mejores cocteles");
            
        // En el caso de que no sea mayor de edad
        } else {

            alert("Lo siento, debes ser mayor de edad para acceder.");

        }
    }
}

chequeoEdad() 


