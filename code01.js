var firstName = ["Lucas", "Jõao", "Pedro", "Matheus", "Eduardo", "José","Marcos","Carlos","Gustavo","Vitor","Bruno","Junio"];
var lastName = ["Silva","Cunha","Queiroz","Oliveira","Braga","Leite","Vieira","Andrade","Carvalho","Coelho","Cury","Orvalho"];

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomName(){
	return firstName[getRandomInt(0, firstName.length)];
}
function getRandomLastName(){
	return " " + lastName[getRandomInt(0, lastName.length)];
}
function getRandomSurName(){
	return lastName[getRandomInt(0, lastName.length)];
}
function getRandomChosenName(){
	if(getRandomInt(0,9) >= 5){
		return " " + getRandomName()
	} else {
	return ""
	}
}
function getRandomChosenSurName(){
	if(getRandomInt(0,9) >= 5){
		return " " + getRandomSurName()
	} else {
	return " "
	}
}
console.log(getRandomName() + getRandomChosenName() + getRandomLastName() + getRandomChosenSurName())
