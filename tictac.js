var activeplayer = "x";
var xmoves = [];
var ymoves = [];
var success = "";
var player1win = "0";
var player2win = "0";

//vert winstates
var winstates1 = ["pos_0", "pos_3", "pos_6"];  
var winstates2 = ["pos_1", "pos_4", "pos_7"];  
var winstates3 = ["pos_2", "pos_5", "pos_8"];  

//hoz winstates

var winstates4 = ["pos_0", "pos_1", "pos_2"]; 
var winstates5 = ["pos_3", "pos_4", "pos_5"];  
var winstates6 = ["pos_6", "pos_7", "pos_8"];   

//diag winstates

var winstates7 = ["pos_0", "pos_4", "pos_8"]; 
var winstates8 = ["pos_2", "pos_4", "pos_6"]; 

//need to write for loop to iterate over 2d array of winsates.
// for (xxx) {
//     (winsates[0]. arraycheckcode)
// }


$( document ).ready(function() {

  var clicked_id = "";
  console.log("test");

  function wincheck(){
    console.log(success);
        if (success === true) {
          console.log("player1wins");
        }
  }



 $( ".gamesquare" ).click(function() {
      // alert( "Handler for .click() called." );
      //get id of clicked element

      clicked_id = $(this).attr('id');
      console.log(clicked_id);

        // check box is empty

        if ($(this).text() === "") {



          //check what player it is

          if (activeplayer === "x") {
              //write x into box
            $(this).text("x");
             //then change active player
            activeplayer = "y";
            //add played move to moves array
              xmoves.push(this.id);

              //check moves array against victory states array return true if winstate match
          
              //winstate1 check

            success = winstates1.every(function(v,i) {
                //every checks if all values in winstates 

              return xmoves.indexOf(v) !== -1;
              console.log("i checked winstates1")
              //close success check?
            });

            console.log(success);

            if (success === true) {
              console.log("player1wins");
              player1win = "true";
            }
           
            // winstates2 check
            success = winstates2.every(function(v,i) {
              return xmoves.indexOf(v) !== -1;
            //close success check?
            });

            console.log(success);

            if (success === true) {
              console.log("player1wins");
              player1win = "true";
            }

            //winstate 3 check
            success = winstates3.every(function(v,i) {
              return xmoves.indexOf(v) !== -1;
            //close success check?
            });

            console.log(success);
            if (success === true) {
              console.log("player1wins");
              player1win = "true";
            }


            //winstate 4 check

            success = winstates4.every(function(v,i) {
              return xmoves.indexOf(v) !== -1;
            //close success check?
            });

            console.log(success);
            if (success === true) {
              console.log("player1wins");
              player1win = "true";
            }


            //winstate 5 check

            success = winstates5.every(function(v,i) {
              return xmoves.indexOf(v) !== -1;
              
            //close success check?
            });

            console.log(success);

            if (success === true) {
              console.log("player1wins");
              player1win = "true";
            }

            //winstate 6 check

            success = winstates6.every(function(v,i) {
              return xmoves.indexOf(v) !== -1;
              //close success check?
            });

            console.log(success);

            if (success === true) {
              console.log("player1wins");
              player1win = "true";
            }

            //winstate 7 check

            success = winstates7.every(function(v,i) {
              return xmoves.indexOf(v) !== -1;
            //close success check?
            });

            console.log(success);

            if (success === true) {
              console.log("player1wins");
              player1win = "true";
            }

           //winstate 8 check

            success = winstates8.every(function(v,i) {
              return xmoves.indexOf(v) !== -1;
          
            //close success check?
            });

            console.log(success);
            if (success === true) {
              console.log("player1wins");
              player1win = "true";
            }

            //end player1 code

          } else {
            
              $(this).text("y");

              activeplayer = "x";
              ymoves.push(this.id);


              success = winstates1.every(function(v,i) {
                return ymoves.indexOf(v) !== -1;
              //close success check?
              });

              console.log(success);

              if (success === true) {
                console.log("player2wins");
                player2win = "true";
              }
               
              // winstates2 check
              success = winstates2.every(function(v,i) {
                return ymoves.indexOf(v) !== -1;
                //close success check?
              });

              console.log(success);

              if (success === true) {
                console.log("player2wins");
                player2win = "true";
              }

                //winstate 3 check
              success = winstates3.every(function(v,i) {
                return ymoves.indexOf(v) !== -1;
                //close success check?
              });

              console.log(success +"test3");

              if (success === true) {
                console.log("player2wins");
                player2win = "true";
              }


              //winstate 4 check

              success = winstates4.every(function(v,i) {
                return ymoves.indexOf(v) !== -1;
                //close success check?
              });

              console.log(success);

              if (success === true) {
                console.log("player2wins");
                player2win = "true";
              }


              //winstate 5 check

              success = winstates5.every(function(v,i) {
                return ymoves.indexOf(v) !== -1;
              //close success check?
              });

              console.log(success);

              if (success === true) {
                console.log("player2wins");
                player2win = "true";
              }

                //winstate 6 check

              success = winstates6.every(function(v,i) {
              return ymoves.indexOf(v) !== -1;
              //close success check?
              });

              console.log(success);

              if (success === true) {
                console.log("player2wins");
                player2win = "true";
              }

              //winstate 7 check

              success = winstates7.every(function(v,i) {
                return ymoves.indexOf(v) !== -1;
                //close success check?
              });

              console.log(success);

              if (success === true) {
                console.log("player2wins");
                player2win = "true";
              }

              //winstate 8 check

              success = winstates8.every(function(v,i) {
                return ymoves.indexOf(v) !== -1;
              //close success check?
              });

              console.log(success);

              if (success === true) {
                console.log("player2wins");
                player2win = "true";
              }
                //endplayer2code /else
           }

            //end emptycheck 
        } else {console.log("thing is full");}


          //endelse 
     }

    //endclickfunction
    );       
  //end docuready
   });