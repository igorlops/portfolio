
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


// hover nos projetos

$('.projeto-single').hover(function(e){
  $('.overlay',this).slideToggle();
  $('.button-projeto').css("display","block")
})
