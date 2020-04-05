<script>
var name = prompt("Hello! please enter your name to begin");
var losses
var strikes = (`${losses}`);
var points


function requirements() {
  let age = prompt("Please enter your age");

	if (age >= 8 && age <= 11 ) {
  		alert("Welcome to Round 1, in this round we will be adding numbers");
	}
		else {
 			alert('Note, only children between the ages of 8 to 11 years old are allowed to play this game.');
			throw new Error("");
			}
}
requirements();


function round1() {
  var MATH1 = (Math.floor(Math.random() * 25));
  var MATH2 = (Math.floor(Math.random() * 9));
  
  let answer = MATH1 + MATH2;
  
  var wronganswer = (Math.floor(Math.random() * 25));
  var randomanswer = (Math.floor(Math.random() * 0));
  
  let A
  let B
  let randomchecker;
  
  if (randomanswer == 0){
  A = answer;
  B = wronganswer;
  }
  else {
  B = answer;
  A = wronganswer;
  }
  
 let questions
 let i 
 miles = i * questions;
 
 var question1 = parseInt(prompt(`Hello ${name}  you are on Question 1 of Round 1, Level 1. Can you please enter the letter which represents the correct answer for  ${MATH1}+${MATH2}: \nI A:${A} \nI B:${B}` ));
    let questionanswer1 = question1
 if (questionanswer1 == A ) {
 	if ( A == answer) {
     alert("correct!");
     }
  } else if (questionanswer1 == B) {
    if ( B == answer) {
     alert("correct!");
     }
	}
    else {
    alert("Incorrect");
    }
}
round1();


for (i=0;i<=2;i++)
{
    round1();
}



</script>