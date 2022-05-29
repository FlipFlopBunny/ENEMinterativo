var score = 0;
var check = 0;

function start () {
	check = 0;
	score = 0;
}

function correctFunction(idButton, nameButton){

 if (idButton == "correct"){
	 document.getElementById("answer").innerHTML = "correta"
	 if(check == 0){
	score++
	 check++
	 }
	 document.getElementById("score").innerHTML = "score: " + score
	 document.getElementById("correct").style.backgroundColor = "#c6faac"
	 document.getElementById("correct").style.borderColor = "#50eb02"
	 }
 else {
	 document.getElementById("answer").innerHTML = "incorreta"
	 document.getElementByName(nameButton).style.backgroundColor = "#faaaac"
	 document.getElementByName(nameButton).style.borderColor = "red"
	 }
 
 
 
}

function proximaFunction (){
	check = 0;
}
