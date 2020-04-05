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
  
  const answer = MATH1 + MATH2;
  
  var wronganswer = (Math.floor(Math.random() * 25));
  var randomanswer = (Math.floor(Math.random() * 0));
  
  var A
  var B
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
 let miles = i * questions;
 
 var question1 = parseInt(prompt(`Hello ${name}  you are on Round 1, Can you please enter the letter which represents the correct answer for  ${MATH1}+${MATH2}: \nI A:${A} \nI B:${B}` ));
    let questionanswer1 = question1
    
 if (randomanswer == 0 ) {
      if (questionanswer1 == A){
      window.alert("correct!");
      }
      else {
      window.alert("Incorrect");
      }
      } else {
     window.alert("correct!");
     }
}
round1();


for (i=0;i<=2;i++)
{
    round1();
}

	alert("Welcome to Round 2, in this round we will be subtracting numbers");

function round2() {
  var MATH1 = (Math.floor(Math.random() * 25));
  var MATH2 = (Math.floor(Math.random() * 9));
  
  const answer = MATH1 - MATH2;
  
  var wronganswer = (Math.floor(Math.random() * 25));
  var randomanswer = (Math.floor(Math.random() * 0));
  
  var A
  var B
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
 let miles = i * questions;
 
 var question2 = parseInt(prompt(`Hello ${name}  you are on Round 2, Can you please enter the letter which represents the correct answer for  ${MATH1} - ${MATH2}: \nI A:${A} \nI B:${B}` ));
    let questionanswer2 = question2
    
 if (randomanswer == 0 ) {
      if (questionanswer2 == A){
      window.alert("correct!");
      }
      else {
      window.alert("Incorrect");
      }
      } else {
     window.alert("correct!");
     }
}
round2();


for (i=0;i<=2;i++)
{
    round2();
}


	alert("Welcome to Round 3, in this round we will be Dividing numbers");

function round3() {
  var MATH1 = (Math.floor(Math.random() * 25));
  var MATH2 = (Math.floor(Math.random() * 9));
  
  const answer = MATH1 - MATH2;
  
  var wronganswer = (Math.floor(Math.random() * 25));
  var randomanswer = (Math.floor(Math.random() * 0));
  
  var A
  var B
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
 let miles = i * questions;
 
 var question3 = parseInt(prompt(`Hello ${name}  you are on Round 3, Can you please enter the letter which represents the correct answer for  ${MATH1} ÷ ${MATH2}: \nI A:${A} \nI B:${B}` ));
    let questionanswer3 = question3
    
 if (randomanswer == 0 ) {
      if (questionanswer3 == A){
      window.alert("correct!");
      }
      else {
      window.alert("Incorrect");
      }
      } else {
     window.alert("correct!");
     }
}
round3();


for (i=0;i<=0;i++)
{
    round3();
}




</script> 
