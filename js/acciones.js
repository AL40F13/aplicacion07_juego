// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	var basedatos=window.sqlitePlugin.openDatabase({name:"coloresBD.db",createFromLocation:1});
	cargarnombrejugador();
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('B1','audio/C.mp3',function(){},
	function(msg){alert("Error " + msg);});
	
	audio.preloadFX('B2','audio/D.mp3',function(){},
	function(msg){alert("Error " + msg);});
	
	audio.preloadFX('B3','audio/E.mp3',function(){},
	function(msg){alert("Error " + msg);});
	
	audio.preloadFX('B4','audio/F.mp3',function(){},
	function(msg){alert("Error " + msg);});
	
	
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
	
	//$('.cuadro').on('vmousedown',function(){
		//$('#pantalla').append(quien($(this).attr('id')));
		//$(this).addClass('pulsado');
	//});//agregar clase pulsado
	//$('.cuadro').on('vmouseup',function(){
		//$(this).removeClass('pulsado');
	//});//remover clase pulsado
	
	function quien (q) 
	{
		audio.play(q);
		return q.substring(1);
	}
	
	function cargarnombrejugador()
	{
		basedatos.transaction(function(ejecutar){
			var sql="SELECT NombreUsuario FROM Usuario";
			ejecutar.executeSql(Sql,undefined,function(ejecutar,resultado){
				var datosJugador=resultado.rows.item(0);
				$('#jugador').text(datosJugador.NombreUsuario);
				
			});
			
		});
	}
	
	$('#btnconfigurar').on('tap',function(){
		$('#txtnombre').val($('#jugador').text());
	});
	
	$('#btnguardar').on('tap',function(){
		var nuevonombre=$('#txtnombre').val();
		basedatos.transaction(function(consulta){
			consulta..executeSql("UPDATE Usuario SET NombreUsuario=? WHERE ClaveUsuario='1';",[nuevonombre]);
		});
		
		cargarnombrejufador();
	});
	
	function flash (boton)
	{
		boton.stop().animate({opacity:'0.5'},{
			duration:80,
			complete:function(){
				boton.stop().animate({opacity:'1'},
				200);
			}
		});
				
	}
	
	$('.cuadro').on('tap',function(){
		flash($(this));
		audio.play($(this).attr('id'));
	});
}); 
});

