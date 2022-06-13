var basketCounter=document.querySelector('header div.conteiner ul:last-of-type a:nth-child(2) li p');


localStorage.basket!=undefined? localStorage.basket:localStorage.basket=0;
 

var count=0;
basketCounter.innerHTML=localStorage.count; 
function clickFunc(a){ 
    
    sneakersArr[a].heart==true?sneakersArr[a].heart=false:sneakersArr[a].heart=true;
    sneakersArr[a].heart==true?document.getElementById(a).style.background=' url(image/svg/heartRed.svg) center no-repeat':document.getElementById(a).style.background=' url(image/svg/heart.svg) center no-repeat';
    document.getElementById(a).style.backgroundSize='90%';
    count=0;
    for (var i=0; i<sneakersArr.length; i++){
        
    sneakersArr[i].heart==true?count++:(sneakersArr[i].heart);   
    
}
    localStorage.count=count;    
    localStorage.basketId+=sneakersArr[a].idProdukt+',';
    basketCounter.innerHTML=localStorage.count; 
}
