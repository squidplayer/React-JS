const buttonele = document.querySelector('button');
const inputele = document.querySelector('input');

buttonele.addEventListener('click', ()=>{
    if(inputele.value === "OFF")
        inputele.value = "ON";
    else
        inputele.value = "OFF";
})