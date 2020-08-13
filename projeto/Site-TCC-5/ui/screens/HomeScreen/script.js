/* NAV-BAR */
(function($) { "use strict";
	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
})(jQuery); 

/* QUIZ */
function anteriorPergunta() {
	if(perguntaSelecionada + 1 > perguntas.length) {
		perguntaSelecionada--;
		document.getElementById("modal-title").innerHTML = perguntas[perguntaSelecionada]['pergunta'];
		document.getElementById("alternativa1").innerHTML = perguntas[perguntaSelecionada]['alternativa1'];
		document.getElementById("alternativa2").innerHTML = perguntas[perguntaSelecionada]['alternativa2'];
		document.getElementById("alternativa3").innerHTML = perguntas[perguntaSelecionada]['alternativa3'];
		document.getElementById("alternativa4").innerHTML = perguntas[perguntaSelecionada]['alternativa4'];
		document.getElementById("alternativa5").innerHTML = perguntas[perguntaSelecionada]['alternativa5'];
	  }
}

function proximaPergunta() {
  if(perguntaSelecionada + 1 < perguntas.length) {
	perguntaSelecionada++;
	document.getElementById("modal-title").innerHTML = perguntas[perguntaSelecionada]['pergunta'];
	document.getElementById("alternativa1").innerHTML = perguntas[perguntaSelecionada]['alternativa1'];
	document.getElementById("alternativa2").innerHTML = perguntas[perguntaSelecionada]['alternativa2'];
	document.getElementById("alternativa3").innerHTML = perguntas[perguntaSelecionada]['alternativa3'];
	document.getElementById("alternativa4").innerHTML = perguntas[perguntaSelecionada]['alternativa4'];
	document.getElementById("alternativa5").innerHTML = perguntas[perguntaSelecionada]['alternativa5'];
  }
}

// COMEÇA AQUI COM A PERGUNTA SELECIONADA VALENDO ZERO
var perguntaSelecionada = 0;
var perguntas = [
	{
		'pergunta': 'Qual o seu animal favorito?',
		'alternativa1': 'Gato',
		'alternativa2': 'Cachorro',
		'alternativa3': 'Lobo',
		'alternativa4': 'Raposa',
		'alternativa5': 'Pinto'
	},
	{
		'pergunta': 'Qual o seu jogo favorito?',
		'alternativa1': 'League of Legends',
		'alternativa2': 'Fifa',
		'alternativa3': 'Free Fire',
		'alternativa4': 'Minecraft',
		'alternativa5': 'CS:GO'
	},
	{
		'pergunta': 'Qual a sua cor favorita?',
		'alternativa1': 'Roxo',
		'alternativa2': 'Laranja',
		'alternativa3': 'Vermelho',
		'alternativa4': 'Preto',
		'alternativa5': 'Branco'
	}
];

document.getElementById("modal-title").innerHTML = perguntas[perguntaSelecionada]['pergunta'];
document.getElementById("alternativa1").innerHTML = perguntas[perguntaSelecionada]['alternativa1'];
document.getElementById("alternativa2").innerHTML = perguntas[perguntaSelecionada]['alternativa2'];
document.getElementById("alternativa3").innerHTML = perguntas[perguntaSelecionada]['alternativa3'];
document.getElementById("alternativa4").innerHTML = perguntas[perguntaSelecionada]['alternativa4'];
document.getElementById("alternativa5").innerHTML = perguntas[perguntaSelecionada]['alternativa5'];