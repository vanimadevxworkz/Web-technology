 function Validation(){
    var user=document.getElementById("userName");
    var pass=document.getElementById("password");

     console.log(user.value);
     console.log(pass.value);

    if(user.value.length>3){
        console.log("valid userName");
    }
    else{
        console.log("invalid userName");
    }
    if(pass.value.length>5){
        console.log("valid password");
    }
    else{
        console.log("invalid password");
    }


 }

 function nameValidation(){
    var btn=document.getElementById("button")
    var user=document.getElementById("userName");
    if(user.value.length>3){
        // document.getElementById("valid").innerHTML="valid userName" or
        document.getElementById("valid").innerHTML="<span style='color:green'>valid userName</span>"
        button.removeAttribute('disabled','')
        console.log("button");
        console.log("valid userName");
    }
    else{
        // document.getElementById("valid").innerHTML="invalid userName"
        document.getElementById("valid").innerHTML="<span style='color:red'>invalid userName</span>"
        // use ser the submit button
        button.setAttribute('disabled','');
        console.log("invalid userName");
    }
 }

 function passvalid(){
    var pass=document.getElementById("password");
    if(pass.value.length>5){
        document.getElementById("validate").innerHTML="<span style='color:green'>valid password</span>"
        console.log("valid password");
    }
    else{
        document.getElementById("validate").innerHTML="<span style='color:red'>invalid password</span>"
        console.log("invalid password");
    }

 }