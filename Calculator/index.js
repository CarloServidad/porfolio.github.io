const text = document.getElementById("number");

const clear = document.getElementById("clear");
clear.onclick = toClear;
const removeNumber = document.getElementById("delete-one-number");
removeNumber.onclick = toDeleteNumber;
const equal = document.getElementById("equal");
equal.onclick = Calculate;

function toDisplayText(input){
    text.value += input;
}
function toClear(){
    text.value = " ";
}
function toDeleteNumber(){
    text.value = text.value.toString().slice(0,-1);
}
function Calculate(){
    try{
        text.value = eval(text.value);
    }
    catch(error){
        text.value = "Error";
    }
}
