var activeplayer = "x";
var xmoves = [];
var ymoves = [];

var playerwin = "none yet";

var turn = 0;

var clicked_id = "";

var arraytoCheck = [];
var winningCombo = [[0, 3, 6],[2, 5, 8],[1, 4, 7],[2, 4, 6],[2, 5, 8],[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 4, 8]]; 


$( document ).ready(function() {



  function checkforwinner(){


    console.log("checkingforwinner");
    //set array to check
    if (activeplayer === 'x'){
      winningArray = xmoves;

      var orderedarray = winningArray.sort();
      console.log(orderedarray)

    } else{
      winningArray = ymoves;
      var orderedarray = winningArray.sort();
      console.log(orderedarray)

    }
    // console.log(arraytoCheck);
     //debugger;

    //begin win checker
    
    winningCombo.forEach(function(array, index){
      var count = 0
      console.log(array,index)
      winningArray.forEach(function(element, index2){
        if (element === array[0] || element === array[1] || element === array[2]){
          count++;


        console.log("element and index2" +element,index2);
        }
        console.log("its the count " +count);
        if (count ===3) {
          alert("we have a winner" + activeplayer);
          playerwin = activeplayer;
        }
      })
    })




    
}
    //end winchecker function

 $( ".gamesquare" ).click(function() {
      //get id of clicked element

    clicked_id = $(this).attr('id');
    console.log(clicked_id);
    turn = turn +1;

        // check box is empty
    if ($(this).text() === "") 
    {
        if (playerwin === "none yet") 
      {

          //check what player it is

        if (activeplayer === "x") 
        {
            //write x into box
          $(this).text("x");
          
          //add played move to moves array
            xmoves.push(Number(this.id));
            //run check for winner function
            checkforwinner();
            //change active player
            activeplayer = "y";

          //end player1 code

        } else 
          {
          
            $(this).text("y");
            ymoves.push(Number(this.id));
            checkforwinner();
            activeplayer = "x";
          } 
                //endplayer2code /else
              
      }else {alert("game is over");}

            //end emptycheck 
    } else {console.log("thing is full");}
          //endelse 

    if (turn >= 9 && playerwin ==="none yet"){
      alert("its a draw");
      // console.log("checking for draw");
    };
  }
      //endclickfunction


        ); 
//what is this one doing?

    

    //end docuready
});



