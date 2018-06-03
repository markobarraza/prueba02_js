$(function() {

	$("#publicacion").on("submit", function(e){
		var text = $('#mipublicacion').val();
		(e).preventDefault();
		$(".contenedor_publicaciones").append(
			'<div class="publicaciones">'
			+'<div class="publicaciones_text">'
			+ text
			+'</div>'
			+'<div class="publicaciones_icons">'
			+'<i class="fas fa-trash-alt icons"></i>'
			+'<i class="fas fa-heart icons"></i>'
			+'</div>'
			+'</div>')
	})

	$('.contenedor_publicaciones').on('click', '.fa-trash-alt', function(){
		$(this).parent().parent().fadeOut(400);
	})


})