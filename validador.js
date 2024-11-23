function validador() {
    let nombre = document.getElementById("nombre").value;
    let correo= document.getElementById("correo").value;
    let imagen= document.getElementById("imagen").value;


    if (nombre == "" || correo==""|| imagen=="" ) {

        alert("todos los campos son obligatorios");
        return false;
    } else {
        return true;
    }

}
function mostrarimagen(event){
    let= imagen=document.getElementById('mostrar_imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   
}
