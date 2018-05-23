var cont = 1; /*Contador para cargar los json*/
var scroll = true; /*Boolean para activar/desactivar leerJson() al hacer scroll*/
$(document).ready(function(){
	/*Cambiar el nombre de las clases al hacer la pantalla pequeña*/
	$(window).resize(function(){cambiarClases();});

    /*Leer y cargar Json al hacer click en el botón "cargar más" */
    $('#btn').click(function(){
    	if ($("#btn").text() === "No hay más noticias") {
    		$("#nomore").fadeIn("slow").delay(2000).fadeOut("slow");
    	}
    	leerJson();
    });

    /*Activar/desactivar leerJson() al hacer scroll*/
    $("#toggle").click(function(){toggleScroll();});
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
    if(cont < 4){
        $.getJSON("https://rawgit.com/alexgaya/noticias/master/json/" + cont + ".json", function(jsonObject){
            cargarJsonLeft(jsonObject);
        });
        $.getJSON("https://rawgit.com/alexgaya/noticias/master/json/" + cont + "-" + cont + ".json", function(jsonObject){
        	cargarJsonRight(jsonObject);
        });
        cont++;
    }else{
        /*Cuando no hay más documentos Json salta una alerta "No hay más noticias" */
        if ($("#btn").text() != "No hay más noticias") {
            $("#nomore").fadeIn("slow").delay(2000).fadeOut("slow");
        }
        $("#btn").text("No hay más noticias");
    }
}
function cargarJsonLeft(json){
    $("#a").append(
        "<div class='row' style='animation: popup 500ms ease-in-out 0s 1 forwards;'></div>"
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
            "<p class'text-left text-muted'>" + a.fecha + "</p>" +
            "</div>" +
            "</div>" +
            "</a>" +
            "</div>"
        ); 
    });
}

function cargarJsonRight(json){
	$.each(json, function(i, a){
		$("#b").append(
		"<div id='" + i + cont +"' class='row' style='display: none'></div>"
		);
		$("#" + i + cont).append(
			"<div class='col-md-12'>" +
			"<a href='###'>" +
			"<div class='thumbnail t-right'>" +
			"<div class='caption c-right'>" +
			"<h3 class='text-center'>" + a.titulo + "</h3>" +
			"</div>" +
			"<img src='" + a.img + "' alt='img'>" +
			"</div>" +
			"</a>" +
			"</div>"
		);
			$("#" + i + cont).fadeIn(1000);
	});
	
}

function toggleScroll(){
    if (scroll) {
        scroll = false;
        $("#desactivado").fadeIn("slow").delay(2000).fadeOut("slow");
    } else {
        scroll = true;
        $("#activado").fadeIn("slow").delay(2000).fadeOut("slow");
    }
}

$(window).scroll(function () {
    if(scroll){
        if ($(window).scrollTop() + $(window).height() + 5 >= $(document).height()) {
            leerJson();
        }
    }
});
