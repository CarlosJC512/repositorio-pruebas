let expr = /(\..*)\./;
$("#formulario").ready(function () {
  $("#enviar").click(function () { 
    if($("#formulario").valid()) {
       alert("Enviando...");
    } else {return false;}
    let formulario = $("#formulario").val();
});

  $("#formulario").validate({
    rules: {
      nombre: {
        required: true,
        minlength: 3,
        maxlength: 20
      },
      numero: {
        required: true,
        number: true,
        minlength: 8,
        maxlength: 10
      },
      forma: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      nombre: {
        required: "Este campo es requerido",
        minlength: "Ingrese al menos 3 caracteres",
        maxlength: "Ingrese menos de 20 caracters"
      },
      numero: {
        required: "Este campo es requerido",
        number: "Este valor no es un numero",
        minlength: "Debe contener almenos 8 numeros",
        maxlength: "No puede contener mas de 10 numeros"
      },
      forma: {
        required: "El formulario esta vacio"
      },
      email: {
        required: "Este campo es obligatorio",
        email: "Ingrese una dirección de correo valida: example@domain.com"
      },
    }
  });

  $("select").change(() => {
    var singleValues = $("#campo").val();

    if (singleValues == $("option[value=nombre]").val()) {
      $("#campo_selecionado").attr({
        type: "text",
        disabled: false,
        name: "nombre",
        onkeypress: "return /[a-z]/i.test(event.key)"
      });
      $("#enviar").attr("type", "submit");
    } else if (singleValues == $("option[value=numero]").val()) {
      $("#campo_selecionado").attr({
        type: "tel",
        disabled: false,
        name: "numero",
        onkeypress: "return /[0-9.]/g.test(event.key)"
      });
      $("#enviar").attr("type", "submit");
    } else if (singleValues == $("option[value=email]").val()) {
      $("#campo_selecionado").attr({
        type: "email",
        disabled: false,
        name: "email",
        onkeypress: false
      });
      $("#enviar").attr("type", "submit");
    } else {
      $("#campo_selecionado").attr({
        type: "hidden",
        disabled: true,
        name: "forma",
        onkeypress: false
      });
      $("#enviar").attr("type", "hidden");
    }
  });

});
