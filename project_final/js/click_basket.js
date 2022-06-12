var basketCounter=document.querySelector('header div.conteiner ul:last-of-type a:nth-child(3) li p');


localStorage.basket!=undefined? localStorage.basket:localStorage.basket=0;
 

console.log();
basketCounter.innerHTML=localStorage.basket; 
function clickFunc(a){ 
   
    localStorage.basket++;
    basketCounter.innerHTML=localStorage.basket; 
    sneakersArr[a].heart==true?sneakersArr[a].heart=false:sneakersArr[a].heart=true;
    sneakersArr[a].heart==true?document.getElementById(a).style.background=' url(image/svg/heartRed.svg) center no-repeat':document.getElementById(a).style.background=' url(image/svg/heart.svg) center no-repeat';
    document.getElementById(a).style.backgroundSize='90%';
    localStorage.basketId+=sneakersArr[a].idProdukt+',';
   

}
