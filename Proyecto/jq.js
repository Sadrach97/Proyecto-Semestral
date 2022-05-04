const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form control');






function comprobarClave(){
  clave1 = document.f1.clave1.value
  clave2 = document.f1.clave2.value

  if (clave1 !== clave2)
      {
        alert("Las claves son distintas...")
        document.f1.clave1.value = "";
        document.f1.clave2.value = "";
        document.f1.clave1.value.focus();
      }
  else
     pass
     
     
}

