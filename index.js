//object
let person={
name:'Amalu',
age:34
};
console.log(person);

//Dot notation
person.name ='Laji';
console.log(person.name);
//Bracket notation
console.log(person['age']);

//
let selection="name";
console.log(person[selection]);

//Array
let selectedColr= []//Array literal;
let selectedColrg= ['red','blue'];
console.log(selectedColrg[0]);
selectedColrg[2]=1;
console.log(selectedColrg); //Type of Array-object

//Function
function greet(name){ //parameter
    console.log("Helo" + name);
}
greet("Amalu"); //argument

//fn calculate value
function square(number){
    return number*number;
}
let number = square(2);
console.log(number);//2 function calls

//document.write("Js valid");
