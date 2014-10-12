/* When docuemtn has loaded ... */
$(document).ready(function(){
    
  /* Create wrapper div */
  $('body').prepend('<div class="container"></div>')
  
  /* inside container place a <button> */
  $('.container').prepend('<button onclick="newGrid(); return false">Custom Grid</button>')
  
    /* after button create 4 unordered lists */
    .append('<ul></ul>')
    .append('<ul></ul>')
    .append('<ul></ul>')
    .append('<ul></ul>')
  
  /* inside each unordered list, add 4 list items */
  $('ul').append('<li></li>')
    .append('<li></li>')
    .append('<li></li>')
    .append('<li></li>')

  /* Give list items styling */
  $('li').css({
    display: 'inline-block',
    'list-style-type': 'none',
    height: '25px',
    width: '25px',
    border: '1px black solid',
    margin: '0 1px',
	
  /* This keeps padding & margin inside the box. */
    'box-sizing': 'border-box'
	  
  /* Create a function so that on-hover (of li's selected above) the background color is changed. */
  }).hover(function() {
  /* "this" is referring to the li's selected above */
    $(this).css('background-color','purple')
  });

  /* Some basic element styling */
  $('.container').css({
    margin: '0 auto'
  });

  $('ul').css({
    padding: '0',
    margin: '0'
  });

  $('button').css({
    margin: '10px 0',
    padding: '10px',
    'font-size': '16px'
  });
});

/* Provides functionality to the button */
function newGrid(){

  /* Changes li color back to white */
  $('li').css('background-color','white');
	
  /* Removes the whole wrapper div */
  $('.container').remove()
  
  /* Add its back in again clear slate. */
  $('body').prepend('<div class="container"></div>')

  /* Asks user for a width, places it into var */
  var width = prompt('Enter a new grid width');

  /* Checks if width meets requirements, endlessly prompts if it is not.  */
  while(width > 40){
    var width = prompt('Grid width must be 40 or less');
  }

  var height = prompt('Enter new grid height');

  /* Checks if height meets requirements, endlessly prompts if it is not.  */
  while(height > 40) {
    var height = prompt('Grid height must be 40 or less');
  }
 
  /* Creates for loop, creates unordered lists (rows) for height  */
  for (var i=0; i<=height;i++){
    $('.container').append('<ul></ul>');
  }

  /* Creates for loop, creates list items (rows) for height  */
  for (var i=0; i<=width;i++){
    $('ul').append('<li></li>');
  }

	
  /* Adds styling for newly created boxes - Ideally this should be placed into its own function thus not repeating code twice */
  $('.container').prepend('<button onclick="newGrid(); return false">Custom Grid</button>')

    $('li').css({
    display: 'inline-block',
    'list-style-type': 'none',
    height: '25px',
    width: '25px',
    border: '1px black solid',
    margin: '0 1px',
    'box-sizing': 'border-box'
  }).hover(function() {
    $(this).css('background-color','purple')
  });

  $('.container').css({
    margin: '0 auto'
  });

  $('ul').css({
    padding: '0',
    margin: '0'
  });

  $('button').css({
    margin: '10px 0',
    padding: '10px',
    'font-size': '16px'
  });
};