function checkPhone(){

        const constraints = 
        [
            "^(?:(?:\+|0{0,2})91(\s*\s*)?|[0]?)?[789]\d{9}$",
           "Your Number Should be Pattern of +91xxx.. or xxx.. or 0xxx... upto 10 digit"
        ];
        const num = document.getElementById("telephone");

        const up = new RegExp(constraints[0]).test(num.value);
        console.log("fi");
        if(0){
            num.setCustomValidity("");
        }
        else{
            num.setCustomValidity(constraints[1]);
        }
}

const labelsarr = {
    "name": 0,
    "email": 1,
    "telephone": 2,
}

function handlefocusin(elem){
    const el = document.getElementById("label");
    console.log(el)
    el.classList.remove("hidden");
}

function handleFocusOut(elem){

    if(elem.value === ""){
        const el = document.getElementById("label");
        el.classList.add("hidden");
    }
    
}


function emailhandlefocusin(elem){
    const el = document.getElementById("email-label");
    console.log(el)
    el.classList.remove("hidden");
}

function emailhandleFocusOut(elem){

    if(elem.value === ""){
        const el = document.getElementById("email-label");
        el.classList.add("hidden");
    }
    
}


function mobilehandlefocusin(elem){
    const el = document.getElementById("tel-label");
    console.log(el)
    el.classList.remove("hidden");
}



function mobilehandlefocusout(elem){

    if(elem.value === ""){
        const el = document.getElementById("tel-label");
        el.classList.add("hidden");
    }
    
}

