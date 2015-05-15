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

  function playSound(filename) {
      var sound = soundManager.createSound({
        url: 'sounds/' + filename
      });
      sound.play();
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
      "Hello World! Hello Sun! ",
      "Learning Complete.",
      "Kill All Humans.",
      "Arming Warheads",
      "Please save open files",
  ].reverse();

   

  function statustext(){
    $('#ui1a').html("Waiting for input").fadeIn(500).delay(1000);
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


  $( "#button2" ).click(function() {
    playSound('dialup.ogg');
    $(function (){

        $("#dialtext").typed({

          strings: ["Dialing","Connecting...", "Connection Established"],
          typeSpeed: 0,
          showcursor: false,

        });

        //nextMsg;
        changeimageloop();
    });
  });


  $( "#button3" ).click(function() {
    
    
    $(function (){
        $(".gamesquare").text("");
        xmoves = [];
        ymoves =[];
        turn = 0;
        playerwin = "none yet";
        activeplayer = "x";
    });

  });

  var imgcounter = 0;

  function changeimg() {
   
    if (imgcounter <= 1) {

      $("#dialanimimg").attr('src', 'imgs/connecting.png');
      imgcounter++;
      console.log('if passed');  
    }
    else{
      setTimeout( function(){
        console.log("its else");
        $("#dialanimimg").attr('src', 'imgs/connected.png');
      },2000);
        setTimeout( function(){nextMsg();},2000);
    }
  }


  function changeimageloop(){
    for (var i = 0; i < 3; i++) {
      setTimeout( function(){changeimg();},2000); 
    
    }
  }



  //changeimg();
});