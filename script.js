// Code goes here

$( "a#test" ).click(function() {
    $( "div#test1" ).fadeIn( 3000, function() {
      $( "div#test2" ).fadeIn( 3000 );
    });
    return false;
  });