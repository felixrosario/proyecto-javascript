// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    eventos = resultado.eventos;

    var id = location.search.match(/id=(\d)*/)[1];

    evento = eventos.find(function (element) {
      return element.id == id
      })

  var html = `<div class="col-12 card">
            <h2>${evento.nombre}</h2>
            <span style="color: grey">${evento.fecha} ${evento.lugar}</span>
            <span>${evento.descripcion}</span>
            <span style="color:blue">Costo: ${evento.precio}</span>
            <span style="color:orange">Invitados: ${evento.invitados}</span>
            </div>`

    document.getElementById("evento").innerHTML = html

   });
});
