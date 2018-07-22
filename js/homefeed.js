$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});

$ ->
  $('[data-toggle]').on('click', ->
    toggle = $(this).addClass('active').attr('data-toggle')
    $(this).siblings('[data-toggle]').removeClass('active')
    $('.surveys').removeClass('grid list').addClass(toggle)
  )
