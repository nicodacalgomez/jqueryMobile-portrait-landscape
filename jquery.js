//Cuando carga la librería jquery Mobile
$(document).on("mobileinit",function(){
	//Hacemos una función
	$(function(){
		//Hacemos un evento que se ejecuta cuando cambiamos la orientación de la pantalla
		$(window).on("orientationchange", function(event){
			//Si está en vertical y con el menú oculto pulsamos el botón para mostrar el menú
			//Si está en horizontal y con el menú visible pulsamos el botón para ocultar el menú
			if($(".ui-collapsible-collapsed").length>0 && event.orientation=="portrait" || $(".ui-collapsible-collapsed").length<1 && event.orientation=="landscape"){
				$(".ui-collapsible-heading-toggle").click();
			}
		});
		//Si al cargar la web la pantalla es más alta que ancha está en vertical así que cambiamos el data-collapsed a false para que se muestre el menú de primeras
		if(window.innerWidth<window.innerHeight){
			$("#nicolista").attr("data-collapsed",false);
		}
	});
});


