$(document).ready(function() {
   $('.header__humburger').click(function(event) {
     $('.header__humburger, .navigation').toggleClass('active');
     $('body').toggleClass('lock');
   })
});