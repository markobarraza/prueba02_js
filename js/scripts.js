$(function() {

	$("#publicacion").on("submit", function(e){
		var text = $('#mipublicacion').val();
		(e).preventDefault();
		$(".contenedor_publicaciones").append(
			'<div class="publicaciones">'
			+'<div class="publicaciones_text">'
			+'<h2>@usuario</h2>'
			+ text
			+'</div>'
			+'<div class="publicaciones_icons">'
			+'<i class="fas fa-trash-alt icons"></i>'
			+'<i class="fas fa-heart icons"></i>'
			+'<h2 id="contador">0</h2>'
			+'</div>'
			+'</div>');
	})

	$('.contenedor_publicaciones').on('click', '.fa-trash-alt', function(){
		$(this).parent().parent().fadeOut(600);
	})

	$('.contenedor_publicaciones').on('click', '.fa-heart', function(e){
		(e).stopPropagation();
		(e).preventDefault();
		var like = $(this).next().text();
		var like = parseInt(like);
		$(this).next().text(like+1);
		$(this).toggleClass('heart-red');
	})

/*	$('.publicaciones_icons').on('click', '.fa-heart', function(e){
		(e).stopPropagation();
		(e).preventDefault();
		var like = $(this).next().text();
		var like = parseInt(like);
		$('#contador').text(like+1);
	})*/

})