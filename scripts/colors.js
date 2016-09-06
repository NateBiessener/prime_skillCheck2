console.log('script sourced');

var colors = [
  {color: 'red', count: 0},
  {color: 'yellow', count: 0},
  {color: 'green', count: 0},
  {color: 'blue', count: 0}
];


$(document).ready(function () {
  console.log('jq working');
  //clear loading messages
  $('#outDiv').empty();
  $('#countDiv').empty();
  $('#btnDiv').empty();
  //add counters and buttons for each color
  for (var i = 0; i < colors.length; i++) {
    $('#countDiv').append('<p color="'+ i +'">Total ' + colors[i].color + ': 0</p>');
    $('#btnDiv').append('<button class="colorBtn" color="'+ i +'">' + colors[i].color[0].toUpperCase() + colors[i].color.slice(1) + '</button>');
  }//end for
  //add function to each button that will create a color square and update that color's counter
  $('body').on('click', '.colorBtn', function(){
    // console.log('in color button, this color\'s index=' + $(this).attr('color'));
    var color = $(this).attr('color')
    colors[color].count++;
    updateCounts();
    addColorDiv(color);
  })// end .colorBtn onclick
  //add function to each color square that will change the square's color and update the color counters
  $('body').on('click', '.colorDiv', function(){
    //define newColor as the next color in the colors array
    var newColor = Math.floor(Math.random() * colors.length);
    //update counts
    colors[$(this).attr('color')].count--;
    colors[newColor].count++;
    $(this).attr('color', newColor);
    $(this).attr('style', 'background-color:' + colors[newColor].color);
    updateCounts();
  })//end .colorDiv onclick
});//end doc ready

//playing a little with selectors and String.slice here
//changes each #countDiv <p> html string to that string with it's last index updated to the proper color count
var updateCounts = function(){
  $('#countDiv').empty();
  for (var i = 0; i < colors.length; i++) {
    /****************Doesn't work with numbers > 9**********
    $('#countDiv p[color="'+ i + '"]').html(
      $('#countDiv p[color="'+ i + '"]').html().slice(0, $('#countDiv p[color="'+ i + '"]').html().length - 1) + colors[i].count
    );
    *******************************************************/
    $('#countDiv').append('<p color="'+ i +'">Total ' + colors[i].color + ': '+ colors[i].count +'</p>');
  }
}

var addColorDiv = function(color){
  //make new jQuery div so I can play with .attr() a bit
  var newDiv = $('<div class="colorDiv"/>');
  //keep color attribute so counts can be updated properly
  newDiv.attr('color', color)
  //style the color divs in jQuery because I can
  newDiv.attr('style', 'background-color:' + colors[color].color + ';');
  //append the new div to #outDiv
  $('#outDiv').append(newDiv);
};
