
//  ANIMACAO DO RESPONSIVO DO MENU HAMBURGUER

$(function(){
    $('.menu-mobile #btn-menu').click(function(){
        var el = $(this).parent().find('ul');
        el.slideToggle("slow" ,function(){

        });
    });

});


// ANIMACAO DOS BOTOES DE NAVEGACAO


$('.nav a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 800);
});

$('.menu a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 800);
});


// BOTOES DA SKILL

$( ".button-right" ).click(function() {
  $( ".skills" ).animate({ "left": "+=50px" }, 200);
});
 
$( ".button-left" ).click(function(){
  $( ".skills" ).animate({ "left": "-=50px" }, 200 );
});


// form

$('.formulario').on('submit',function(){
  var nome = $(this).find('input[name=nome]'), nome = nome.val();
  var email = $(this).find('input[name=email]'), email = email.val();
  var mensagem = $(this).find('name=texto'), mensagem = mensagem.val();
  var texto = 'Olá destinatário, \n Meu nome é ' + nome + 'e meu email é ' + email +
  ' a mensagem que escrevi é ' + mensagem;
  $(this).find('input[name=mensagem]').attr('value', texto);

})