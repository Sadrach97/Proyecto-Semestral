const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form control');

const formulario_1 = document.getElementById('form1');
const inputs1 = document.getElementById('#form control1');




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
function rellenarDatos(){
  document.f2.nombre1.value = document.f3.nombre2.value;
  document.f2.clave11.value = document.f3.contra.value;
}

