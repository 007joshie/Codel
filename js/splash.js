$(document).foundation()


$(function() {
  $(".btn-toggle-menu").click(function() {
    $("#wrapper").toggleClass("toggled");
  });
})



/* ==============================================
SCROLLSPY -->
=============================================== */


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

 var loader2 = document.getElementsByClassName('hero-img');
 function loadBMAnimation2(loader2) {
  var animationSplash = bodymovin.loadAnimation({
    container: loader2,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: 'https://assets1.lottiefiles.com/packages/lf20_MZTE5I.json',
    rendererSettings: {
  	preserveAspectRatio: 'xMidYMid meet'
  }
  });
 }
  for (var i = 0; i < loader2.length; i++) {
   loadBMAnimation2(loader2[i]);
  }

 window.onload = function() {
  // PR.prettyPrint();
  document.body.className += " loaded";
}
