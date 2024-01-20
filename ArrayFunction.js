function arraryDeclaration(){
    var ref=[1,5,8,3,6,4,5];
    console.log(ref);
}
arraryDeclaration();


 function  arraryDeclaration3(){
    var ref=[1,5,8,3,6,4,5];
    console.log(ref[4]);
}
arraryDeclaration3();//6



function arraryDeclaration2(){
    var ref=[1,5,8,3,6,4,5];
    console.log(ref.length);
}

//arraryDeclaration();//length 7

function arraryDeclaratio n1(){
    var ref=[1,4,7,3,8,4,2];
    ref[7]=10;
    console.log(ref);
}
arraryDeclaration1();


//create a object
function array(){
let object={name:"xworkz",location:"benglore"};
console.log(object);
}
array();

let object1={name:"xworkz",location:"benglore"};
console.log(object1.name);

//using for loop find the length
function arrayFunction(){
    var ref=[1,2,3,4,5,6];
    for(let i=0;i<ref.length; i++){
        console.log(ref[i]);
    }
}
arrayFunction();


let object={name:"xworkx",location:"banglore"};
object.name="manglore";
object.location="xworkz";
console.log(object);

let location3={locationName:"manglore",wether:"20d"};
let location1={locationName:"benglore",wether:"19d"};
var arrayObject=[location3,location1];
console.log(arrayObject);


for(let i=0; i<arrayObject.length; i++){
    console.log(arrayObject[i].locationName);
}
