//make sure jquery starts correctly//
$(document).ready(function(){ 

//creating a () that takes two parameters, min and max
function randomNum (min, max) {return Math.floor(Math.random()*(max-min+1))+min;
}    
//generating a random whole number and adding the generated number to the "answer" ID
var targetNumber = 0;
var wins= 0;
var losses = 0;
var userTotal= 0;

Math.floor(Math.random()*100);
$('#answer').text(targetNumber);

var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

$("#winTimes").text(wins);

$("#loseTimes").text(losses);

//setting var to the () and calling it
var targetNumber = randomNum (1,100);

console.log(targetNumber);

//f() to reset the game
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNum').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    }

//win f()
function youWin(){
    alert("You won!");
      wins++;
      $('#winTimes').text(wins);
      reset();
    }
//lose ()
function loser(){
    alert ("You lose!");
      losses++;
      $('#loseTimes').text(losses);
      reset()
    }
//assigning an onclick listener to the crystals
    $('.triangle').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
             
            if (userTotal == randomNum){
              youWin();
            }
            else if ( userTotal > randomNum){
              youLose();
            }  
      })  
      $('.square').on ('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
             
            if (userTotal == randomNum){
              youWin();
            }
            else if ( userTotal > randomNum){
              youLose();
            }  
      })  

      $('.diamond').on ('click', function(){
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
             
            if (userTotal == randomNum){
              youWin();
            }
            else if ( userTotal > randomNum){
              youLose();
            }  
      })  
      $('.circle').on ('click', function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
             
            if (userTotal == randomNum){
              youWin();
            }
            else if ( userTotal > randomNum){
              youLose();
            }  
      })  

//win/lose conditions
if (userTotal == randomNum){
    youWin();
  }
  else if ( userTotal > randomNum){
    youLose();
  }  

});