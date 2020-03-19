//Define las variables que necesites

  var pasados = [];
  var hoy;
  var eventos;

  $(document).ready(function () {

    $.ajax({
      url: "info.json"
    }).done(function (resultado) {

      hoy = resultado.fechaActual;
      eventos = resultado.eventos;

      for(var i = 0; i < eventos.length; i++){
        if (eventos[i].fecha < hoy){
          pasados.push(eventos[i]);
        }
      }

      pasados = pasados.sort(function(x,y){
        if (x.fecha < y.fecha){
          return 1;
        }
        return -1;
      });

      var html = ""

      for(var j = 0; j < pasados.length; j++){
        html += `<div class="col-12 card mb-3">
                <h2><a href="detalle.html?id=${pasados[j].id}">${pasados[j].nombre}</a></h2>
                <span style="color: grey">${pasados[j].fecha} ${pasados[j].lugar}</span>
                <span>${pasados[j].descripcion}</span>
                <span style="color:blue">Invitados: ${pasados[j].invitados}</span>
                </div>`
      }
      document.getElementById("pasados").innerHTML = html
  });
});
