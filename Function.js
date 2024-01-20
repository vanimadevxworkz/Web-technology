   //named function

function getName(){
    console.log("this is named function");
}
getName();

//Anymous function

var ref=function(){

    console.log("this is self invoking function");
};
ref();

(function (){
    console.log("this is self invoking function");
})
();

//Arrow function

const arrowFunction=()=>{

    console.log("this is arrow function");
};
arrowFunction();

//Airthmetic operation
function getPrice(){
    a=120;
    b=30;
    c=a+b;
    console.log(c);
}
getPrice();

var ref=function(){

    a=25;
    b=3
    c=a*b;
    console.log(c);
}
ref();

const Arrow=()=>{

    a=40;
    b=25;
    x=a-b;
    console.log(x);
}
Arrow();


var city;
var college;
var hospital;
var mobile;
var watch;

//using function and initialize 

function intilization(){
    city="benglore";
    console.log(city);
}
intilization();

function intilization1(city1){
    city=city1;
    console.log(city);
}

intilization1("Mandya");

function initialise2(){
    college="ppc";
    console.log(college);
}

initialise2();

function initialise(){
    hospital="svs";
    console.log(hospital);
}
initialise();

function initialise3(){

    mobile="iphone";
    console.log(mobile);
}
initialise3();

function initialise4(watchs){
    watch=watchs;
    console.log(watch);
}
initialise4("smart");

function initialise(citys){
    city=citys
    var city="manglore";
    console.log(city);
}

initialise();



