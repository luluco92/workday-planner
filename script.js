// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function initialize() {

$('#currentDay').text(dayjs().format('ddd MMM D, YYYY h:mm A'));

  // change max i to reach up to < 9
  for ( i = 0; i < 9; i++) {
     var j = i + 9;
     var idname = 'hour-' + j;
     var thebloc = $('.container-lg').children().eq(i)

     if (thebloc.attr('id') === idname && localStorage.getItem(idname) != null){ 
thebloc.children().eq(1).val(localStorage.getItem(idname));}

     if (j > dayjs().format('H')) {
       thebloc.addClass('future');
     }
     else if (j == dayjs().format('H')) {
       thebloc.addClass('present');
     }
     else {
       thebloc.addClass('past');
     }
  }
}

//$(function () {

//});




initialize();

setInterval(function() {
$('#currentDay').text(dayjs().format('ddd MMM D, YYYY h:mm A'));

}, 1000);

$('.saveBtn').on('click', function () {
  var hourid = $(this).parent().attr('id')
  var hourmemo = $(this).parent().children('textarea').val().trim();
  if (hourmemo == "") {
  localStorage.removeItem(hourid);
  }
  else {
  localStorage.setItem(hourid, hourmemo);
  }
});

