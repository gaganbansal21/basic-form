
function handlefocusin(elem){
    const el = document.getElementById("label");
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

addEventListener("submit", (event) => {alert("Your Data has been Sent to oUr team ! We will Conatct you shortly")});

