console.log("animations active");

$( document ).ready(function() {


var sources = [
    "imgs/disconnected.png",
    "imgs/connecting.png",
    // ...
    "imgs/connected.png",

];

var pics = [];
for(var i = 0; i < sources.length; i++) {
    var pic = new Image();
    pic.src = sources[i];
    pics[i] = pic;
}



function nextMsg() {
    if (messages.length == 0) {
        // once there is no more message, do whatever you want
        //alert("Get ready to start!");
        //statustext();
        
  
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        $('#ui1a').html(messages.pop()).fadeIn(500).delay(1500).fadeOut(500, nextMsg);
    }
}
// list of messages to display
var messages = [
    "Learning Mode on",
    "Please Wait..Learning.",
    // "Hello World! Hello Sun! ",
    // "Learning Complete. Arming Warheads.",
    // "Please enter 3 correct symbols to continue",
].reverse();

 // $('img.swap').click(function () {
 //        this.src = '/images/signup_big_hover.png';
 //    }, function () {
 //        this.src = '/images/signup_big.png';
 //    });


// initially hide the message
// $('#message').hide();

// start animation
//

function statustext(){
  $('#ui1a').html("Waiting for input").fadeIn(500).delay(1000)
  //.fadeOut(500);

}




$( "#button1" ).click(function() {
  $( "#dial" ).slideUp( "slow", function() {
    // alert( "Animation complete." );

    $( "#game" ).slideDown( "slow", function() {
    // alert( "Animation 2 complete." );
  });

  });

});

$( "#button1" ).dblclick(function() {
  $( "#game" ).slideUp( "slow", function() {
    // alert( "Animation complete." );

    $( "#dial" ).slideDown( "slow", function() {
    // alert( "Animation 2 complete." );
  });

  });

});

$( "#button3" ).click(function() {
  
  nextMsg(messages);
  $(function (){
      $("#ui1a").typed({
        strings: ["Arming Warheads", "Second sentence."],
        typeSpeed: 0
      });
      });



  });

// $(function (){
//       $("#ui1a").typed({
//         strings: ["Arming Warheads", "Second sentence."],
//         typeSpeed: 0
//       });
//   });

  // });

});

 
// Add this for the animated blinking cursor.

// .typed-cursor{
//     opacity: 1;
//     -webkit-animation: blink 0.7s infinite;
//     -moz-animation: blink 0.7s infinite;
//     animation: blink 0.7s infinite;
// }