console.log("animations active");

$( document ).ready(function() {






$( "#button1" ).click(function() {
  $( "#dial" ).slideUp( "slow", function() {
    // alert( "Animation complete." );

    $( "#game" ).slideDown( "slow", function() {
    // alert( "Animation 2 complete." );
  })

  });

})

$( "#button2" ).click(function() {
  $( "#game" ).slideUp( "slow", function() {
    // alert( "Animation complete." );

    $( "#dial" ).slideDown( "slow", function() {
    // alert( "Animation 2 complete." );
  })

  });

})


;});