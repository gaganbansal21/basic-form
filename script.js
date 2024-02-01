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


window.onload = () =>{
    document.getElementById("telephone").onchange = checkPhone;
  document.getElementById("telephone").oninput = checkPhone;
}