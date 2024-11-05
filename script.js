console.log("A11 STRINGS are CrEaTED Equal" == "All STRINGS are CrEaTED Equal")
const adjective1 = "amazing";
const adjective2 = "fun";
const adjective3 = "entertaining";
const madLib = "The Intro to JavaScript course is "+ adjective1 +". James and Julia are so "+ adjective2 +". I cannot wait to work through the rest of this "+ adjective3 +" content!";
console.log(madLib);
const firsName=  "Julia";
const interest="cats";
const hobby= "video games";
const awesomeMessage="hey,my name is"+ firsName +".i love" + interest + ".in my spare time, i like to play"+ hobby +".";
console.log(awesomeMessage)
const number=35425413
if(number%2===0){
    console.log("even")
}else{
    console.log("odd")
}
let variable=0
if(variable<=0){
    console.log("not a group")
}else if (variable===1){
   console.log("solo") 
}else if(variable===2){
    console.log("duet")
}
    else if(variable===4){
        console.log("quartet")
    }else{
        console.log("this is a large group")
    }
var room="ballroom"
var suspect="Mr. Kalehoff"
let weapon;
let solved=false
if (room === 'ballroom' && suspect === 'Mr. Kalehoff') {
    weapon = 'poison';
    solved = true;
  } else if (room === 'gallery' && suspect === 'Ms. Van Cleve') {
    weapon = 'trophy';
    solved = true;
  } else if (room === 'billiards room' && suspect === 'Mrs. Sparr') {
    weapon = 'pool stick';
    solved = true;
  } else if (room === 'dining room' && suspect === 'Mr. Parkes') {
    weapon = 'knife';
    solved = true;
  } else {
    solved = false;
  }
  
  if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
  } else {
    console.log("The case is not solved!");
  }
  let balance=-4
  let isActive= true
  let checkBalance= true
  if(checkBalance===true){
if(isActive===true && balance>0 ){
    console.log("your balance is $"+balance.toFixed(2)+".")
}else if(isActive===true&&balance===0) {
console.log("your acount is empty")
}else if(isActive===true&& balance<0){
console.log("Your balance is negative. Please contact bank.")
}else if(isActive===false){
console.log("Your balance is negative. Please contact bank.")
}
  }else{
    console.log("thanks. have anice day")
  }
  let flavors= "vanilla"
  let topping= "sprinkles"
  let Vessel= "Wafer"
  if(flavors==="vanilla"||flavors==="chocolate"&& topping==="sprinkles"||topping==="peanuts"&&Vessel==="Wafer"||Vessel==="sugarcone"){
console.log("Great choice! Your ice cream is at the next window.")
  }else{
    console.log("Please check our menu and try again.")
  }
  var shirtWidth = 50; 
  var shirtLength = 30; 
  var shirtSleeve = 8.71; 
  
if(shirtWidth===23&&shirtLength===30&&shirtSleeve===8.71){
console.log("L")
}else if(shirtWidth===18&&shirtLength===28&&shirtSleeve===8.13){
console.log("S")
} else if(shirtWidth===20&&shirtLength===29&&shirtSleeve===8.38) {
console.log("M")
} else if(shirtWidth===24&&shirtLength===31&&shirtSleeve===8.88){
console.log("XL")
}else if(shirtWidth===26&&shirtLength===33&&shirtSleeve===9.63){
console.log("2XL")
}else if(shirtWidth===28&&shirtLength===34&&shirtSleeve===10.13){
    console.log("3XL")
}else{
    console.log("sorry we dont have that size")
}
//udacity code
    
var shirtWidth = 19;
var shirtLength = 28;
var shirtSleeve = 8.13; 

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
size = "3XL";
}
else {
size = "NA";
}
console.log(size);

if ("bigg"){
console.log("hello")
}else{
    console.log("false")
}
const isGoing = true;
const color = isGoing ? "green" : "red";
console.log(color);
let option=3
if(option===1){
  console.log("you choosed numb  1")
}else if(option===2){
  console.log("choos 2")
}else if(option===3){
  console.log("choose  3")
}
var solution=10
switch(solution){
  case 1:
    console.log("you and i will sata")
    break;
    case 2 : 
    console.log("keep calling")
    break;
    case 3:
      console.log("hey bro")
      break;
      default:
        console.log("you are wrong")
}
/*we can put the default anywher.*/
const month = 9;
let days;

switch(month) {
  case 1:
  case 2:
    days = 28;
    break;
  case 3:
  case 4:
    days = 30;
    break;
  case 5:
  case 6:
    days = 30;
    break;
  case 7:
  case 8:
  case 9:
    days = 30;
    break;
  case 10:
  case 11:
    days = 30;
    break;
  case 12:
  default:
    days = 31;
}
console.log("There are " + days + " days in this month.");
const tier = "nsfw deck";
let output = "Youll receive "
switch(tier){
case "yes":
  output+="hello bro";
  case "nomatter":
    output+="okk fine ";
    case "nsfw deck":
      output+="you and i will stay with me";
      default :
      output+="12312"
 }
var education="you";
var Salary;
switch(education){
case "high school diploma":
  Salary = "$35,256";
  break;
  case "Associate's degree":
    Salary = "$41,496";
    break;
    case "Bachelor's degree":
      Salary = "$59124";
      break;
      case "Master's degree":
        Salary = "$69732";
        break;
        case "Professional degree":
          Salary = "$89960";
          break;
          case "Doctoral degree":
          Salary = "$84396";
          case "no high school diploma":
            Salary = "$25636";
          default:
            Salary = "thiis is wong salary okkk"
}
console.log("in 2015, aperson with" + education + " earned an an avarege of" + Salary + " per year.")
//while loop
var x = 1;
while (x <= 10) {
    console.log(x+ " mississippi!");
    x++;
}
let y=0
while(y<=20){
if(y%3===0){
console.log("Julia")
}else if(y%5===0){
console.log("James")
}else if(y%3===0&&y%3===0){
  console.log("JuliaJames")
}else if(!(y%3===0&&y%3===0)){
console.log(y)
}
y=y+1; 
}
var x= 99
while(x>=1){
  if(x===1){
    console.log( x + " bottle of juice on the wall!" + x + " bottle of juice! Take one down, pass it around..." + (x-1)  + " bottles of juice on the wall!")
  }else{
    console.log( x + " bottles of juice on the wall!" + x + " bottles of juice! Take one down, pass it around...")
  }
x=x-1;
}
let num = 99;

while (num >=1) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2){
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}
var x = 60
while(x>=0){
  if(x===50){
    console.log("Orbiter transfers from ground to internal power")
  }else if(x===31){
console.log("round launch sequencer is go for auto sequence start (T-31 seconds)")
  }else if(x===16){
console.log("Activate launch pad sound suppression system")
  }else if(x===10){
    console.log("Activate main engine hydrogen burnoff system ")
  } else if(x===6){
console.log("Main engine start ")
  }else if(x===0){
    console.log("Solid rocket booster ignition and liftoff!")
  } else{
    console.log("T-" + x + " Seconds")
  }
x=x-1;
}
for(var x=0;x<8;x=x+2){
for(var t =1;t<4;t=t+1){
console.log(x+","+t)
}
}
//THE DUFFERENCE (X++) "AND" (++X)
let f=3
console.log(f++)
console.log(++f)

for(let x=9;x>=1;x--){
  console.log("hello " + x);
}
 //nusted loops
for(let R=0;R<=25;R++){
  for(let S=0;S<=99;S++){
console.log(R+"-"+S)
  }
}
//fonctions at udacity
function reverseString(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length - 1; i >= 0; i--) {
      reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Julia"));
var reverseIt= "Fikre"
function everseString(reverseIt){
  let backed=""
  for(let i=reverseIt.length-1;i>=0;i++){
 backed+=reverseIt[i]
  }
  return backed;
}
console.log(reverseString("ticktock"))
function sayHello() {
  const message = "Hello!"
  console.log(message);
  
}
sayHello()
var solution=1
for(let i=1;i<=12;i++){
solution*=i
}
console.log(solution)
function averag(x,y){
let answer=(x+y)/2;
return answer;
}
console.log(averag(8,20))
//SEE THIS FUN
let numb = 3
function laugh(numb){
sound=""
  for(let i=0;i<=numb;i++){
    sound+="ha"
  }
  return sound + "!"
}
console.log(laugh(20))

function laugh(a,b){
  sum=0//check what happence when sum=""
    for(let i=a;i<=b;i++){
      sum+=i
    }
    return sum
  }
  //look at this 
  console.log(laugh(1,3))
  function whatHappens() {
    console.log("I am printing to the console");
    return "I am returning a value";
  }
  
  whatHappens();
  var integer=2
  function isPrime(integer) {
    for (let x = 2; x < integer; x++ ) {
        if(integer % x === 0) {
            console.log(integer + " is divisible by " + x);
            return false;
        }
    }
    return true
}
console.log(isPrime(10))
//look at this plaes!!!
function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

const result = addTen(2);
console.log(divideByThree(result));
const a = 1;
function x() {
 const b = 2;
  function y() {
   const c = 3;
    function z() {
      const d = 4;
    }
    z();
  }
  y();
}
function addme(){
  let adding ="bigg brother"
  console.log(adding+"come withe me")

function ehya(){
let keep="kill them"
console.log("hey" + keep + " bro"+adding )
return keep;
}
ehya()
}
addme()
//notte this please????reassigning
var student="fikre"
if(student=="fikre"){
  var student="abera";
console.log(student);
console.log(student);
console.log("hey")
}
console.log(student);
console.log(student)
//but this.....
var x = 1;

function addTwo() {
    var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);
const catSays = function(max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
}
console.log(catSays(4))

let addit=function (a,b){
let sum=0
for(i=a;i<=b;i++){
  sum+=i
}
return sum;
}
console.log(addit(6,10))

findAverage(5, 9);

function findAverage(x, y) {
    var answer = (x + y) / 2;
    return answer;
}

function makeLine(length) {
  var line = "";
  for (let i = 1; i <= length; i++) {
      line += "* ";
  }
  return line + "\n";
}
//see this please
function buildTriangle(length) {
  var triangle = "";
  for (let lineNumber = 1; lineNumber <= length; lineNumber++) {
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
console.log(buildTriangle(10));
const fikre=[
  "kass",
  "abe",
  "kalu"];
fikre[1]="tonke"
console.log(fikre[1])
let myVare=2
myVare=["banna","fikre"]
console.log(myVare)
const myarry = ["julia","james","fikre"]
function arry(myarry){
  let show=" "
for (index = 0; index<myarry.length; index++){
show+=myarry[index] + " , "
}
return show;
}
//Mind you here!!!
console.log(arry(myarry))
const Name=['Mal', 'Zoe', 'Wash', 'Inara', 'Jayne', 'Kaylee']
console.log(Name)
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
for(index=0;index<prices.length;index++){
  if(index===0){
    prices[index]=prices[index]*2
  }else if(index===2){
    prices[index]=prices[index]*2
  }else if(index===7){
    prices[index]=prices[index]*2
  }
}
console.log(prices)
console.log(prices.length)
const inventory = [
  ["gold pieces", 25],
  ["belt", 4],
  ["ring", 1],
  ["shoes", 2]
];
//its leangth is 4
inventory.pop()
console.log(inventory)
const donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 2, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
console.log(donuts)