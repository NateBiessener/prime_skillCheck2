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
  //and update counters & buttons
  updateTopDisp();
  $('body').on('click', '.colorBtn', function(){
    // console.log('in color button, this color\'s index=' + $(this).attr('color'));
    var color = $(this).attr('color')
    colors[color].count++;
    updateTopDisp();
    addColorDiv(color);
  })
  $('body').on('click', '.colorDiv', function(){
    $(this).remove();
    colors[$(this).attr('color')].count--;
    updateTopDisp();
  })
});

var updateTopDisp = function(){
  $('#countDiv').empty();
  $('#btnDiv').empty();
  for (var i = 0; i < colors.length; i++) {
    $('#countDiv').append('<p color="'+ i +'">Total ' + colors[i].color + ': '+ colors[i].count +'</p>');
    $('#btnDiv').append('<button class="colorBtn" color="'+ i +'">' + colors[i].color[0].toUpperCase() + colors[i].color.slice(1) + '</button>');
  }//end for
}

var addColorDiv = function(color){
  var newDiv = $('<div class="colorDiv"/>');
  newDiv.attr('color', color)
  newDiv.attr('style', 'width: 100px; height: 100px; display: inline-block; border: 1px solid black; background-color:' + colors[color].color + ';');
  $('#outDiv').append(newDiv);
};
