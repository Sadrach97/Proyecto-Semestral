$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        nombre : {
          required: true,
          minlength: 3
        }, appate : {
            required: true,
            minlength: 3
          }
        ,
        Correo: {
          required: true,
          email: true
        },
        weight: {
          required: {
            depends: function(elem) {
              return $("#age").val() > 50
            }
          },
          number: true,
          min: 0
        }
      },
      messages : {
        nombre: {
          minlength: "El nombre debe tener al menos 3 caracteres"
        },
        appate: {
            minlength: "El apellido debe tener al menos 3 caracteres"
          },
        Correo: {
          email: "El correo debe ser como el siguiente formato: abc@stylish.com"
        },
        weight: {
          required: "People with age over 50 have to enter their weight",
          number: "Please enter your weight as a numerical value"
        }
      }
    });
  });