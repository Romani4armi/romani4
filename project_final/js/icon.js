

var ul=document.querySelector(".card_cneakers");
var html = '';
var newSnekerV;
var hitTovar;
var discountSneaker;
for(var i=0; i<sneakersArr.length; i++){
   sneakersArr[i].newSneker==true?newSnekerV='style="display:block"':newSnekerV='';
   sneakersArr[i].hit==true?hitTovar='style="display:block"':hitTovar='';
   sneakersArr[i].discount>0?discountSneaker='style="display:block"':discountSneaker='';
   sneakersArr[i].heart==false?heartColor='':heartColor='style="background: url(image/svg/heartRed.svg) center no-repeat;background-size: 90%;"'
    html+=`
    <li "> 
        <div class="up_icon" >
    
            <div ${newSnekerV}>новинка</div>
            <div  ${hitTovar} >хит</div>
            <div  ${discountSneaker}> ${sneakersArr[i].discount}%</div>  
            <div ></div>  
            <button ${heartColor} id="${sneakersArr[i].idProdukt}" onclick="clickFunc(${sneakersArr[i].idProdukt}) "> </button>
        </div>
    <a  onclick="localStorage.test = ${sneakersArr[i].idProdukt}"  href="productPage.html">
        <div class="card_sneakers_background" style="background:url(${sneakersArr[i].background})center center no-repeat,#f3f3f399;">
       
        
        </div>  
        <p>
       <span>${sneakersArr[i].brend} </span> /${sneakersArr[i].description}
        </p> 
    <div> ${sneakersArr[i].price} р. </div>   
     <a/>                   
</li>
    `
    
}


ul.innerHTML = html;
