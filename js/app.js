$(document).foundation()


$(function() {
  $(".btn-toggle-menu").click(function() {
    $("#wrapper").toggleClass("toggled");
  });
})

$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 200
        }, 1000);
        $( this).find( "div.inner-codel-card" ).css( "background-color", "red" );
        return false;
      }
    }
  });
});

/* ==============================================
SCROLLSPY -->
=============================================== */

$('body').scrollspy({
  target: '.nav-sidebar'
});

$('[data-spy="scroll"]').each(function() {
  var $spy = $(this).scrollspy('refresh')
})

$('.nav-sidebar>nav>li>a').click(function() {
    $('.nav-sidebar>nav>li').removeClass('active');
    $(this).parent().addClass('active');
});


var loader = document.getElementsByClassName('bodymovin');
function loadBMAnimation(loader) {
 var animation = bodymovin.loadAnimation({
   container: loader,
   renderer: "svg",
   loop: true,
   autoplay: true,
   path: 'https://assets9.lottiefiles.com/packages/lf20_FjaIds.json'
 });
}
 for (var i = 0; i < loader.length; i++) {
  loadBMAnimation(loader[i]);
 }

 $('.bodymovin').click(function(e) {
   document.body.className -= " loaded";
   window.location = "index.html"});

 window.onload = function() {
  PR.prettyPrint();
  document.body.className += " loaded";
}
