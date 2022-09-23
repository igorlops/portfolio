$(function(){
    $('.menu-mobile #btn-menu').click(function(){
        var el = $(this).parent().find('ul');
        
        if(el.is(':visible')==false){
            el.fadeIn();
        }else{
            el.fadeOut();
        }
    })

});


$('.nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });

  $('.menu a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });