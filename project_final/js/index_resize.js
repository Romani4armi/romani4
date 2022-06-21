$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false, 
        pauseOnFocus:false,
          
       
      });
      
});
 var heightKonteiner;
 window.addEventListener('resize',function(){
  heightKonteiner = this.innerWidth;
  
 });
localStorage.smotr='';
localStorage.test=1;
var ul=document.querySelector(".slider");
var html_slid = '';
resizeSlider(document.querySelector('.conteiner').offsetWidth)
function resizeSlider(a){
  console.log(a)
for(var i=0; i<sneakersArr.length; i++){
  
  html_slid+=`
  <li class="slider_slick"><a onclick="localStorage.test = ${sneakersArr[i].idProdukt}"  href="productPage.html"><img src="${sneakersArr[i].background}" alt="sneaker"  width="${a/3.35}px" height="${a/3.35}px"></a></li>
  `
}
ul.innerHTML=html_slid;
}
function genderSneker(a){ //отправляет в сторож данные о гендере 
  localStorage.genderSnekers=a
  
}



// var cadId = document.getElementById('card_id');
// cadId.addEventListener('click', function(){
  
  
// });
// var idProdukt_local;
// idProdukt_local=localStorage.test;
// var prodVis='15,14,13';
// prodVis+=','+idProdukt_local;
// localStorage.smotr=prodVis;

localStorage.smotr.length<5?localStorage.smotr='15,14,13':true;
localStorage.basketId=',';
localStorage.count=0;
localStorage.brend='';
    localStorage.description='';
    localStorage.background='';
    localStorage.newSneker='';
    localStorage.hit='';
    localStorage.discount='';
    localStorage.heart='';
    localStorage.price='';
    localStorage.idProdukt='';
    for(var i=0; i<sneakersArr.length;i++){
        localStorage.brend+=sneakersArr[i].brend+',';
        localStorage.description+=sneakersArr[i].description+','
        localStorage.background+=sneakersArr[i].background+','
        localStorage.newSneker+=sneakersArr[i].newSneker+','
        localStorage.hit+=sneakersArr[i].hit+','
        localStorage.discount+=sneakersArr[i].discount+','
        localStorage.heart+=sneakersArr[i].heart+','
        localStorage.price+=sneakersArr[i].price+','
        localStorage.idProdukt+=sneakersArr[i].idProdukt+','
    }
    document.onmousemove = function(event){
      let x = event.x-950;
      let y = event.y-800;
     
    x=x/50;
    y=y/50;
  document.querySelector('.choice_sneaker').style.backgroundPosition=''+(x-130)+'px '+(y-42)+'px';
  
  };
 