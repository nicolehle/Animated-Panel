$(document).ready(function(){
  $('.sun').click(function (e) {
    e.stopPropagation();
    $("html").toggleClass('main-bg');
    $(".sky-night").toggleClass('sky-night-fade');
    $(".shooting-star").toggleClass('shooting');
    $(".mountain-back").toggleClass('mountain-visible');
  })

});
