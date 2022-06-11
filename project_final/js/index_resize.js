$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,   
       
      });
});
localStorage.test=1;
var ul=document.querySelector(".slider");
var html_slid = '';

for(var i=0; i<sneakersArr.length; i++){
  
  html_slid+=`
  <li class="slider_slick"><a onclick="localStorage.test = ${sneakersArr[i].idProdukt}"  href="productPage.html"><img src="${sneakersArr[i].background}" alt="sneaker"  width="400px" height="400px"></a></li>
  `
}
ul.innerHTML=html_slid;
// var cadId = document.getElementById('card_id');
// cadId.addEventListener('click', function(){
  
  
// });
// var idProdukt_local;
// idProdukt_local=localStorage.test;
// var prodVis='15,14,13';
// prodVis+=','+idProdukt_local;
// localStorage.smotr=prodVis;
localStorage.smotr.length<5?localStorage.smotr='15,14,13':true;