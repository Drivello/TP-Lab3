function validar_datospersonales(){
    var nombre, apellido;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(document.getElementById("nombre").value.length < 2 ||  document.getElementById("nombre").value === ""){
        alert("El nombre es muy corto");
        document.getElementById("nombre").style.backgroundColor ="yellow";
        return false;
    }
    if(document.getElementById("apellido").value.length < 2 || document.getElementById("apellido").value === ""){
        alert("El apellido es muy corto"); 
        document.getElementById("apellido").style.backgroundColor ="yellow";
        return false;
    }
    if(!expresion.test(document.getElementById("email").value || "")){
        alert("El correo no es válido");
        document.getElementById("email").style.backgroundColor ="yellow";
        return false;
    }
    document.getElementById("nombre").style.backgroundColor ="none";
    document.getElementById("apellido").style.backgroundColor ="none";
    document.getElementById("email").style.backgroundColor ="none";
    return true;
}
document.getElementById("datos_fin").onclick = function trivia_on(){
    if(validar_datospersonales()){
        document.getElementById("datospersonales").style.display = "none";
        document.getElementById("datos_fin").style.display = "none";
        document.getElementById("trivia").style.display = "flex";
        document.getElementById("trivia_fin").style.display = "block";
    }
}
function validar_trivia(){
    if(document.getElementById("preg1").selectedIndex === 0){
        alert("Un imput del tipo select no ha sido seleccionado");
        document.getElementById("preg1").style.backgroundColor = "yellow";
        return false;
    }
    if(document.getElementById("preg2").selectedIndex === 0){
        alert("Un imput del tipo select no ha sido seleccionado");
        document.getElementById("preg2").style.backgroundColor = "yellow";
        return false;
    }
    if(document.getElementById("preg3").selectedIndex === 0){
        alert("Un imput del tipo select no ha sido seleccionado");
        document.getElementById("preg3").style.backgroundColor = "yellow";
        return false;
    }
    return true;
}
document.getElementById("trivia_fin").onclick = function provincias_on(){
    if(validar_trivia()){
        document.getElementById("trivia").style.display = "none";
        document.getElementById("trivia_fin").style.display = "none";
        document.getElementById("provincias").style.display = "flex";
        document.getElementById("provincias_fin").style.display = "block";
    }
}
function validar_provincias(){
    if(document.getElementById("preg4").value <=0 || document.getElementById("preg4").value === ""){
        alert("El campo de tipo numérico no puede contener un numero menor o igual a 0 (en este caso) ni estar en blanco");
        document.getElementById("preg4").style.backgroundColor = "yellow";
        return false;
    }
    if(document.getElementsByName("respuestas5")[0].checked === false && document.getElementsByName("respuestas5")[1].checked === false && document.getElementsByName("respuestas5")[2].checked === false && document.getElementsByName("respuestas5")[3].checked=== false){
        alert("Debe marcar al menos un input radio")
        document.getElementById("preg5").style.backgroundColor = "yellow";
        return false;
    }
    if(document.getElementsByName("respuestas6")[0].checked === false && document.getElementsByName("respuestas6")[1].checked === false && document.getElementsByName("respuestas6")[2].checked === false && document.getElementsByName("respuestas6")[3].checked=== false){
        alert("Debe marcar al menos un input radio")
        document.getElementById("preg6").style.backgroundColor = "yellow";
        return false;
    }
    if(document.getElementsByName("respuestas7")[0].checked === false && document.getElementsByName("respuestas7")[1].checked === false && document.getElementsByName("respuestas7")[2].checked === false && document.getElementsByName("respuestas7")[3].checked=== false){
        alert("Debe marcar al menos un input radio")
        document.getElementById("preg7").style.backgroundColor = "yellow";
        return false;
    }
    return true;
}
document.getElementById("provincias_fin").onclick = function territorioargentino_on(){
    if(validar_provincias()){
        document.getElementById("provincias").style.display = "none";
        document.getElementById("provincias_fin").style.display = "none";
        document.getElementById("territorioargentino").style.display = "flex";
        document.getElementById("FIN").style.display = "block";
    }
}
function validar_territoriosargentinos() {
    if(document.getElementById("preg8").value.length < 2 ||  document.getElementById("preg8").value === ""){
        alert("La respuesta es muy corta"); 
        document.getElementById("preg8").style.backgroundColor ="yellow";
        return false;
    }
    if(document.getElementById("preg9").value.length < 2 ||  document.getElementById("preg9").value === ""){
        alert("La respuesta es muy corta"); 
        document.getElementById("preg9").style.backgroundColor ="yellow";
        return false;
    }
    if(document.getElementById("preg10").value.length < 2 ||  document.getElementById("preg10").value === ""){
        alert("La respuesta es muy corta"); 
        document.getElementById("preg10").style.backgroundColor ="yellow";
        return false;
    }
    return true;
}
document.getElementById("FIN").onclick = function territorioargentino_on(){
    if(validar_territoriosargentinos()){
        document.getElementById("datospersonales").style.display = "flex";
        document.getElementById("trivia").style.display = "flex";
        document.getElementById("provincias").style.display = "flex";
        document.getElementById("territorioargentino").style.display = "flex";

    }
}
function puntuar() {
    var nombrecompleto, puntuacion, estado;
    nombrecompleto = document.getElementById("nombre").value.concat(" ", document.getElementById("apellido").value);
    puntuacion = 0;

    function check_select(id_select,res){
        var seleccionado = document.getElementById(id_select).selectedIndex;
        if(document.getElementsByName(res)[seleccionado].value === "correcto"){
            puntuacion++;
            document.getElementById(id_select).style.backgroundColor = "green";
        }
        else{
            document.getElementById(id_select).style.backgroundColor = "red";
        }
    }
    check_select("preg1", "respuestas1");
    check_select("preg2", "respuestas2");
    check_select("preg3", "respuestas3");
    if(document.getElementById("preg4").value === "23"){
        document.getElementById("preg4").style.backgroundColor = "green";
        puntuacion++;
    }
    else{
        document.getElementById("preg4").style.backgroundColor = "red";
    }
    function check_radios(res){
        for (i = 0; i < document.getElementsByName(res).length; i ++){
            if(document.getElementsByName(res)[i].checked && document.getElementsByName(res)[i].value === "correcto"){
                puntuacion++;
                return true;
            }
        }
    }
    if(check_radios("respuestas5")){document.getElementById("preg5").style.backgroundColor = "green";}
    else{document.getElementById("preg5").style.backgroundColor = "red";}
    if(check_radios("respuestas6")){document.getElementById("preg6").style.backgroundColor = "green";}
    else{document.getElementById("preg6").style.backgroundColor = "red";}
    if(check_radios("respuestas7")){document.getElementById("preg7").style.backgroundColor = "green";}
    else{document.getElementById("preg7").style.backgroundColor = "red";}
    if((document.getElementById("preg8").value.toUpperCase()).trim() === "CHILE"){
        document.getElementById("preg8").style.backgroundColor = "green";
        puntuacion++;
    }
    else{
        document.getElementById("preg8").style.backgroundColor = "red";
    }
    if((document.getElementById("preg9").value.toUpperCase()).trim() === "BOLIVIA" || (document.getElementById("preg9").value.toUpperCase()).trim() === "BRASIL" || (document.getElementById("preg9").value.toUpperCase()).trim() === "PARAGUAY" || (document.getElementById("preg9").value.toUpperCase()).trim() === "URUGUAY"){
        document.getElementById("preg9").style.backgroundColor = "green";
        puntuacion++;
    }
    else{
        document.getElementById("preg9").style.backgroundColor = "red";
    }
    if((document.getElementById("preg10").value.toUpperCase()).trim() === "MESOPOTAMIA"){
        document.getElementById("preg10").style.backgroundColor = "green";
        puntuacion++;
    }
    else{
        document.getElementById("preg10").style.backgroundColor = "red";
    }
    if(puntuacion >= 6){
        estado = "Aprobado."
    }
    else if(puntuacion === 10){
        estado = "Sobresaliente. ¡Felicitaciones!"
    }
    else{
        estado = "Desaprobado."
    }
    alert(nombrecompleto + " su puntuacion fue de " + puntuacion + "/10. " + estado);
    return false; /* Para que no se me vaya el formulario y se vean bien las respuestas */
}
