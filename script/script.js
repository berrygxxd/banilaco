jQuery(document).ready(function(){
  $('.dot-1').click(function(){
    $('.dot').removeClass('active');
    $('.dot-1').addClass('active');
    $('#slider').css('transform', 'translateX(0px)');
  });

  $('.dot-2').click(function(){
    $('.dot').removeClass('active');
    $('.dot-2').addClass('active');
    $('#slider').css('transform', 'translateX(-1920px)');
  });

  $('.dot-3').click(function(){
    $('.dot').removeClass('active');
    $('.dot-3').addClass('active');
    $('#slider').css('transform', 'translateX(-3840px)');
  });


  $('.product-tab1').css('background-color', '#e46190').css('color', '#fff');
});

