// https://www.w3schools.com/jsref/prop_win_localstorage.asp

localStorage.setItem("carName","BMW");

const dark = document.querySelector('h1').attributes[0].value;
const light = document.querySelector('h2').attributes[0].value;
const other = document.querySelector('h3').attributes[0].value;


if(dark == 'dark'){
    localStorage.setItem('newId','0');
    localStorage.removeItem("id");
    localStorage.removeItem("modId");
}else if(light == 'light'){
        localStorage.setItem('modId','1');
}else{
    localStorage.setItem('modId','3');
}
// localStorage.removeItem("");

