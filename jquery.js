$(document).ready(function() {
//Basic selectors, just like css selectors
  //$('*').css('border', '4px solid black');
//Basic animation slider that almost worked
//  $('.tab').slideDown("slow");


//Change themes
$('#coffeebrew').click(function(){
  $('body').css("background", "url(media/kahvia.jpg)");
  $('#banner').css("background-color", "red");
  $('#bannerheader').text("Coffee Spinner");
  $('#bannerheadertwo').text("Who brews coffee?");
});

$('#dishwashing').click(function(){
  $('body').css("background", "url(media/dishwash.jpg)");
  $('#banner').css("background-color", "green");
  $('#bannerheader').text("Dishwash Spinner");
  $('#bannerheadertwo').text("Who washes dishes?");
});

$('#garbages').click(function() {
  $('body').css("background", "url(media/garbage.jpg)");
  $('#banner').css("background-color", "blue");
  $('#bannerheader').text("Garbage Spinner");
  $('#bannerheadertwo').text("Who empties the bin?");
});

$('#cooking').click(function() {
  $('body').css("background", "url(media/food.jpg)")
  $('#banner').css("background-color", "purple");
  $('#bannerheader').text("Cooking Spinner");
  $('#bannerheadertwo').text("Who cooks food?");
});


});
