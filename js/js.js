var cont = 1;

$(document).ready(function(){
	//Cambiar el nombre de las clases al hacer la pantalla pequeña
	$(window).resize(function(){cambiarClases();});
    $('#btn').click(function(){leerJson();});
});

function cambiarClases(){
	if($(window).width() < 960 ) {
    	$('#z').removeClass('clearfix');
        $('#asd').removeClass('pull-left');
	$('#zz').removeClass('pull-rigth');
    }else{
        $('#asd').addClass('pull-left');
        $('#z').addClass('clearfix');
	$('#zz').addClass('pull-rigth');
    }
}

function leerJson(){
    $.getJSON("https://rawgit.com/alexgaya/noticias/master/json/" + cont + ".json", function(jsonObject){
        cargarJson(jsonObject);
    });
    cont++;
}

function cargarJson(json){
    $("#a").append(
            "<div class='row'></div>"
    );
    $.each(json, function(i, a){
        $(".row:last").append(
            "<div class='col-xs-12 col-md-4'>" +
            "<a href='##''>" +
            "<div class='thumbnail'>" +
            "<img src='" + a.img + "' alt='img'>" +
            "<div class='caption'>" +
            "<h3 class='text-justify'>" + a.titulo + "</h3>" +
            "<p class='text-left'>" + a.descripcion + "</p>" +
            "<hr>" +
            "<p class'text-left'>" + a.fecha + "</p>" +
            "</div>" +
            "</div>" +
            "</a>" +
            "</div>"
        ); 
    });
}
