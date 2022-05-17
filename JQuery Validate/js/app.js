let expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
/*
(() => {
  $(document).ready(function () {
    $("#bEnviar").click(function () {
      let nombre = $("#itNombre").val();
      let correo = $("#itMail").val();
      let asunto = $("#itAsunto").val();

      if (nombre == "") {
        $("#mensaje1").fadeIn();
        return false;
      } else {
        $("#mensaje1").fadeOut();
        if (correo == "" || !expr.test(correo)) {
          $("#mensaje2").fadeIn();
          return false;
        } else {
          $("#mensaje2").fadeOut();
          if (asunto == "") {
            $("#mensaje3").fadeIn();
            return false;
          } else {
            $("#mensaje3").fadeOut();
          }
        }
      }
    });
  });
})();

(() => {
  $(document).on("ready", inicio);
  function inicio() {
    $("#bEnviar").on("click", validarDatos);
  }
  function validarDatos() {
    let rb = $("input[type = 'radio']").is(":checked");
    let cb = $("input[type = 'checkbox']").is(":checked");
    let sel = $("#lugar").is(":selected");
    if (rb.length == 0) {
      $("#mensaje4").fadeIn();
      return false;
    } else {
      $("#mensaje4").fadeOut();
      if (cb.length == 0) {
        $("#mensaje5").fadeIn();
        return false;
      } else {
        $("#mensaje5").fadeOut();
        if (sel.val() == "") {
          $("#mensaje6").fadeIn();
        }
      }
    }
  }
})();*/

(() => {
  $(document).on("ready", inicio);
  function inicio() {
    $("#bEnviar").on("click", validarDatos);
  }
  function validarDatos() {
    let nombre = $("#itNombre").val();
    let correo = $("#itMail").val();
    let asunto = $("#itAsunto").val();
    let rb = $("input[type = 'radio']").is(":checked");
    let cb = $("input[type = 'checkbox']").is(":checked");
    let sel = $("#lugar").is(":selected");
    if (nombre == "") {
      $("#mensaje1").fadeIn();
      return false;
    } else {
      $("#mensaje1").fadeOut();
      if (correo == "" || !expr.test(correo)) {
        $("#mensaje2").fadeIn();
        return false;
      } else {
        $("#mensaje2").fadeOut();
        if (asunto == "") {
          $("#mensaje3").fadeIn();
          return false;
        } else {
          $("#mensaje3").fadeOut();
          if (rb.length == 0) {
            $("#mensaje4").fadeIn();
            return false;
          } else {
            $("#mensaje4").fadeOut();
            if (cb.length == 0) {
              $("#mensaje5").fadeIn();
              return false;
            } else {
              $("#mensaje5").fadeOut();
              if (sel.val() == "") {
                $("#mensaje6").fadeIn();
              }
            }
          }
        }
      }
    }
  }
})();
