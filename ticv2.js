var activeplayer = "x";
var xmoves = [];
var ymoves = [];

var playerwin = "none yet";

var turn = 0;

var clicked_id = "";

var arraytoCheck = [];
var arrwinPositions = [[0, 3, 6],[2, 5, 8],[1, 4, 7],[2, 4, 6],[2, 5, 8],[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 4, 8]]; 


$( document ).ready(function() {



  function checkforwinner(){

    console.log("checkingforwinner");
    //set array to check
    if (activeplayer === 'x'){
      arraytoCheck = xmoves;
    } else{
      arraytoCheck = ymoves;
    }
    // console.log(arraytoCheck);
     //debugger;

    //begin win checker
    for (var i = 0; i < arrwinPositions.length; i++) 
    //start loop and run the winning values array as many times as there are items in the array 
    {    
      // console.log("started first loop" +i);
     
      for(k = 0; k < arraytoCheck.length; k++){
         // console.log("started second loop" +k);
        //console.log(this.value);
        
        //loop check every value in the array of moves
        // console.log("at first if check" + arraytoCheck);
              // console.log("against" + arrwinPositions);
              console.log('am i true? ... ' + typeof arrwinPositions[i][0] + ' ' + typeof arraytoCheck[k]);


        if (arrwinPositions[i][0] === arraytoCheck[k]){
           console.log("firstif found" +i +k);
           // debugger;
           
          //check if the first value of the current (i) arrwinPositions(move?) is equal to current value of the WinArray
          if (arrwinPositions[i][1]=== arraytoCheck[k+1] && arrwinPositions[i][2] === arraytoCheck[k+2]){
            //console.log("secondif " +i +" "+k);
            alert( activeplayer + ' is a winner');
            playerwin = activeplayer;
            
            break;

          }
        }
      }
    }
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
            

            //end emptycheck 
    } else {console.log("thing is full");}
          //endelse 

    if (turn >= 9 && playerwin ==="none yet"){
      alert("its a draw");
      console.log("checking for draw");
    };
  }
    //endclickfunction


      ); 
//what is this one doing?

    

    //end docuready
});