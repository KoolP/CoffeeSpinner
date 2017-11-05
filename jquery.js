$(document).ready(function() {
//Basic selectors, just like css selectors
  //$('*').css('border', '4px solid black');
//Basic animation slider that almost worked
//  $('.tab').slideDown("slow");


//Change themes
$('#coffeebrew').click(function(){
  $('body').css("background", "url(media/kahvia.jpg)");
  $('#banner').css("background-color", "red");
});

$('#dishwashing').click(function(){
  $('body').css("background", "url(media/dishwash.jpg)");
  $('#banner').css("background-color", "green");
});

$('#garbages').click(function() {
  $('body').css("background", "url(media/garbage.jpg)");
  $('#banner').css("background-color", "blue");
});

$('#cooking').click(function() {
  $('body').css("background", "url(media/food.jpg)")
  $('#banner').css("background-color", "purple");
});


});
