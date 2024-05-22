// event listner
document.getElementById("markquiz").addEventListener("click", mark);

// html variavles
let queOne = document.getElementById("king").value.toLowerCase();
let queTwo = document.getElementById("queen").value.toLowerCase();
let queThree = +document.getElementById("squares").value;
let queFour = document.getElementById("any").value.toLowerCase();
let anwOne = document.getElementById("one");
let anwTwo = document.getElementById("two");
let anwThree = document.getElementById("three");
let anwFour = document.getElementById("four");

// function
function mark() {
 //variables
  let n1 = 0
  let n2 = 0
  let n3 = 0
  let n4 = 0
 //input
 queOne = document.getElementById("king").value.toLowerCase();
queTwo = document.getElementById("queen").value.toLowerCase();
queThree = +document.getElementById("squares").value;
queFour =  document.getElementById("any").value.toLowerCase();
//que 1
if( queOne == "king"){
  anwOne.innerHTML = "correct"
n1++
console.log(queOne)
}else{
  anwOne.innerHTML = "incorrect"
 // n1 = 0
}

//que 2
if(queTwo == "queen"){
  anwTwo.innerHTML = "correct"
  n2++
}else {
  anwTwo.innerHTML = "incorrect"
 // n2 = 0
}
//que 3
if(queThree == 64){
  anwThree.innerHTML = "correct"
  n3++
}else{
  anwThree.innerHTML = "incorrect"
  //n3 = 0
}

//que 4
if(queFour == "queen" || queFour == "bishop" || queFour == "rook" || queFour == "knight"){
  anwFour.innerHTML = "correct"
  n4++
}else{
  anwFour.innerHTML = "incorrect"
 // n4 = 0
}
 

  //process
  let total = n1 + n2 + n3 + n4 
console.log(total)
let percent = (total/4) * 100

  // output
  document.getElementById("score").innerHTML = " You got  " + total + " /4" + `      (${percent} %)`

  // feedback
let feedback = document.getElementById("results")

if (percent == 25){
feedback.innerHTML = "you can improve"
}else if(percent == 35){
  feedback.innerHTML = "you did good"
}else if(percent == 75){
  feedback.innerHTML = "good job"
}else if(percent == 100) {
  feedback.innerHTML = "GREAT!"
}else{
  feedback.innerHTML = "you didn't try"
}

}