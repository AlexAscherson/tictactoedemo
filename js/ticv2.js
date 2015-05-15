var activeplayer = "x";
var xmoves = [];
var ymoves = [];

var playerwin = "none yet";

var turn = 0;

var clicked_id = "";

var arraytoCheck = [];
var winningCombo = [[0, 3, 6],[2, 5, 8],[1, 4, 7],[2, 4, 6],[2, 5, 8],[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 4, 8]]; 

$( document ).ready(function() {

function playSound(filename) {
    var sound = soundManager.createSound({
      url: 'sounds/' + filename
    });
    sound.play();
  }

  function checkforwinner(){
    //console.log("checkingforwinner");

    //set which players moves to check
    if (activeplayer === 'x'){
      winningArray = xmoves;
      var orderedarray = winningArray.sort();
      //console.log(orderedarray)
    } else{
      winningArray = ymoves;
      var orderedarray = winningArray.sort();
      //console.log(orderedarray)
    }
    //begin win checker
    winningCombo.forEach(function(array, index){
      var count = 0
      //console.log(array,index)
      winningArray.forEach(function(element, index2){
        if (element === array[0] || element === array[1] || element === array[2]){
          count++;
        //console.log("element and index2" +element,index2);
        }
        //console.log("its the count " +count);
        if (count ===3) {
          alert("we have a winner" + activeplayer);
          playSound('abomb.mp3');
          playerwin = activeplayer;
           $('#ui1a').text(activeplayer + " Wins");
        }
      })
    })   
  }
    //end winchecker function

  
 $( ".gamesquare" ).click(function() {
      //clicking on a square function
    clicked_id = $(this).attr('id');
   // //get id of clicked element console.log(clicked_id);
    turn = turn +1;
        // check box is empty and game is ongoing before write
    if ($(this).text() === "") 
    {
        if (playerwin === "none yet") 
      {
          //check what player it is
        if (activeplayer === "x") 
        {
          playSound('gasp_x.wav');
          $(this).text("x");
          //write x into box+ add played moves to moves array
            xmoves.push(Number(this.id));
            checkforwinner();
            //run check for winner function
            activeplayer = "y";
            //change active player
        } else 
          { playSound('gasp_ohhh.wav');
            $(this).text("y");
            ymoves.push(Number(this.id));
            checkforwinner();
            activeplayer = "x";
          } 
                //endplayer2code /else          
      }else {alert("The Game is over. Double click a square to restart");
      playSound('no.mp3');

    }

            //end emptycheck 
    } else {console.log("Illegal move, box is full");}
          //endelse 
    if (turn >= 9 && playerwin ==="none yet"){
      alert("Its a draw, You hear the computer data tapes spinning into overdrive..");
      $('#ui1a').text('Draw.  The World is saved.');
      // console.log("checking for draw");
    };
  }
      //endclickfunction

        ); 
//what is this one doing?

    //end docuready
});



