// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var proximos = [];
var hoy;
var eventos;

$(document).ready(function () {

    $.ajax({
      url: "info.json"
    }).done(function (resultado) {

      hoy = resultado.fechaActual;
      eventos = resultado.eventos;

      for(var i = 0; i < eventos.length; i++){
        if (eventos[i].fecha > hoy){
          proximos.push(eventos[i]);
        }
      }

      proximos = proximos.sort(function(x,y){
        if (x.fecha > y.fecha){
          return 1;
        }
        return -1;
      });

      var html = ""

      for(var j = 0; j < proximos.length; j++){
        html += `<div class="col-12 card mb-3">
                <h2><a href="detalle.html?id=${proximos[j].id}">${proximos[j].nombre}</a></h2>
                <span style="color: grey">${proximos[j].fecha} ${proximos[j].lugar}</span>
                <span>${proximos[j].descripcion}</span>
                <span style="color:blue">Costo: ${proximos[j].precio}</span>
                </div>`
      }
      document.getElementById("proximos").innerHTML = html

  });
});
