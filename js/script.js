let decInp = document.getElementById("data-in");
let binInp = document.getElementById("data-out");
let errorMsg = document.getElementById("error-msg")

decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);    
    binInp.value = ("0000000" + decValue.toString(2)).slice(-7);
});

binInp.addEventListener("input", () => {    
    binInp.value = ("0000000" + binInp.value).slice(-7);
    let binValue = binInp.value;  
    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
        errorMsg.textContent = "";
    }else {
        errorMsg.textContent = "Please Enter An Valid Binary Input";
    }
    
    function binValidator(num) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] != "0" && num[i] != "1") {
                return false;
            }            
        } 
        return true;       
    }
    
});