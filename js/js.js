$(document).ready(function(){
	//Cambiar el nombre de las clases al hacer la pantalla pequeña
	$(window).on('resize', function(){cambiarClases();});
});

function cambiarClases(){
	if($(window).width() < 960 ) {
    	$('#z').removeClass('clearfix');
        $('#asd').removeClass('pull-left');
    }else{
        $('#asd').addClass('pull-left');
        $('#z').addClass('clearfix');	
    }
}