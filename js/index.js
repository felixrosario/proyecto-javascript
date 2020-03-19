// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var hoy;
var eventos;
var proximos = [];
var pasados = [];
var proximos1 = [];
var pasados1 = [];
$(document).ready(function () {

  $.ajax({
    url: "info.json"
  }).done(function (resultado){

   eventos = resultado.eventos;
   hoy = resultado.fechaActual;

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

   proximos1 = proximos.slice(0,2);

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

   pasados1 = pasados.slice(0,2);

   var html = ""

   for(var j = 0; j < proximos1.length; j++){
     html += `<div class="col-5 card mx-auto">
             <h2><a href="detalle.html?id=${proximos1[j].id}">${proximos1[j].nombre}</a></h2>
             <span style="color: grey">${proximos1[j].fecha}</span>
             <span>${proximos1[j].descripcion}</span>
             </div>`
   }
   document.getElementById("proximos").innerHTML = html

   var html1 = ""

   for(var j = 0; j < pasados1.length; j++){
     html1 += `<div class="col-5 card mx-auto">
             <h2><a href="detalle.html?id=${pasados[j].id}">${pasados1[j].nombre}</a></h2>
             <span style="color: grey">${pasados1[j].fecha}</span>
             <span>${pasados1[j].descripcion}</span>
             </div>`
   }
   document.getElementById("pasados").innerHTML = html1

  });
 });
