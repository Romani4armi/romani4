var basketCounter=document.querySelector('header div.conteiner ul:last-of-type a:nth-child(2) li p');
var kCounter = 0;//счетчик окошка поиск

localStorage.basket!=undefined? localStorage.basket:localStorage.basket=0;
 

var count=0;
basketCounter.innerHTML=localStorage.count; 
function clickFunc(a){ 
    var localStorageArr=[];
   
    localStorageArr=localStorage.heart.split(',');
    
    
    localStorageArr[a]=='true'?localStorageArr[a]=false:localStorageArr[a]=true;
    localStorage.heart=localStorageArr.join(','),
    localStorageArr[a]==true?document.getElementById(a).style.background=' url(image/svg/heartRed.svg) center no-repeat':document.getElementById(a).style.background=' url(image/svg/heart.svg) center no-repeat';
    document.getElementById(a).style.backgroundSize='90%';
    var zxc =  localStorage.heart.split(',');
   
    localStorage.heart=localStorageArr.join(',');
    localStorage.count=0;
    for(var i=0;i<localStorageArr.length;i++){
      zxc [i]=='true'?localStorage.count++ :true;
      
    }
    basketCounter.innerHTML=localStorage.count; 
}
var heartBasket = document.querySelector('.basket_heart');
function clickFunc2(a){   
    var localStorageArr=[];
    
    localStorageArr=localStorage.heart.split(',');
    localStorageArr[a]=='true'?localStorageArr[a]=false:localStorageArr[a]=true;
    localStorage.heart=localStorageArr.join(','),
    console.log(localStorageArr[a])
    if(localStorageArr[a]==true){
        heartBasket.style.background='url(image/svg/heartRed.svg) center no-repeat';
        heartBasket.style.backgroundSize='90%';
        localStorage.count++
    }
    else    {
        heartBasket.style.background='url(image/svg/heart.svg) center no-repeat';
        heartBasket.style.backgroundSize='90%';
        localStorage.count--
    };
  
    
    
    basketCounter.innerHTML=localStorage.count; 
}


for(var i=0; i<sneakersArr.length;i++){
    localStorage.basket==sneakersArr[i].idProdukt?sneakersArr[i].heart=true:true;
}

function pushBasket (a){
    var arrHeart=localStorage.heart.split(',');
    arrHeart[a]='true';
    heartBasket.style.background='url(image/svg/heartRed.svg) center no-repeat';
    heartBasket.style.backgroundSize='90%';
    localStorage.count=0;
    localStorage.heart=arrHeart.join(',');
    for(var i=0;i<arrHeart.length;i++){
        arrHeart [i]=='true'?localStorage.count++ :true;
        
      }
    
    basketCounter.innerHTML=localStorage.count; 

} var poiskGlobal = document.querySelector('.poisk');
function vklPoisk(){
  if (kCounter==0) {
    poiskGlobal.style.display='block';
    kCounter++;
    
  } else {
    poiskGlobal.style.display='none';
    kCounter--
  }
 

}
