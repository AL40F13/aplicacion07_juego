// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnjugar').on('tap',function(){
		var pantalla=$.mobile.getScreenHeight();
		var encabezado=$('.ui-header').outerHeight();
		var pie=$('.ui-footer').outerHeight();
		var contenido=$('.ui-content').outerHeight();
		var alto=(pantalla-encabezado-pie)/2;
		
		$('.cuadro').height(alto);
		
		//alert ('pantalla ' + pantalla);
		//alert ('Encabezado ' + encabezado);
		//alert ('Pie ' + pie);
		//alert ('Contenido ' + contenido);
		
	});//btnjugar-click
	
	$('.cuadro').on('vmousedown',function(){
		$('#pantalla').append(quien($(this).attr('id')));
		$(this).addClass('pulsado');
	});//agregar clase pulsado
	$('.cuadro').on('vmouseup',function(){
		$(this).removeClass('pulsado');
	});//remover clase pulsado
	
	function quien (q) 
	{
		return q.substring(1);
	}
}); 
});

