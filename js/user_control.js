//User Type Control
const params = new Proxy(new URLSearchParams(window.location.search), {get: (searchParams, prop) => searchParams.get(prop),});
let value = params.userType;

var eTE = document.getElementsByClassName("trainee");
var eTR = document.getElementsByClassName("trainer");
var eSL = document.getElementsByClassName("select");

if(value=="trainer"){
  while(eTE[0]) {
    eTE[0].parentNode.removeChild(eTE[0]);
  }
}

if(value=="trainee"){
  while(eTR[0]) {
    eTR[0].parentNode.removeChild(eTR[0]);
  }
}

if(value==null){
    eTR[0].parentNode.removeChild(eTR[0]);
    eTE[0].parentNode.removeChild(eTE[0]);
} else {
    while(eSL[0]) {
        eSL[0].parentNode.removeChild(eSL[0]);
    }
}