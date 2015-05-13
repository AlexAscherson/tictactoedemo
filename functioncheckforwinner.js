function checkforwinner(){
var winningArray = [2, 4, 6, 8];
var winningCombo = [[0, 3, 6],[2, 5, 8],[1, 4, 7],[2, 4, 6]]; 

for (var i = 0; i < winningCombo.length; i++) 
//start loop and run the winning values array as many times as there are items in the array winning combo
  {    console.log("started first loop" +i);
   
    for(k = 0; k < winningArray.length; k++){
       console.log("started first loop" +k);
      console.log(this.value);
      
      //loop check every value in the array of moves

      if (winningCombo[i][0] === winningArray[k]){
         console.log("firstif" +i +k);
         
         
        //check if the first value of the current (i) winningCombo(move?) is equal to current value of the WinArray
        if (winningCombo[i][1]=== winningArray[k+1] && winningCombo[i][2] === winningArray[k+2]){
          console.log("secondif " +i +" "+k);
          alert( ' ' + ' is a winner');
          break;

        }
      }
    }
  }
}

checkforwinner();