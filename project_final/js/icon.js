

var ul=document.querySelector(".card_cneakers");
var html = '';
var newSnekerV;
var hitTovar;
var discountSneaker;
for(var i=0; i<sneakersArr.length; i++){
   sneakersArr[i].newSneker==true?newSnekerV='style="display:block"':newSnekerV='';
   sneakersArr[i].hit==true?hitTovar='style="display:block"':hitTovar='';
   sneakersArr[i].discount>0?discountSneaker='style="display:block"':discountSneaker='';
    html+=`
    <li> 
    <div  onclick="clickFunc" class="card_sneakers_background" style="${sneakersArr[i].background}">
       
        <div ${newSnekerV}>новинка</div>
        <div  ${hitTovar} >хит</div>
        <div  ${discountSneaker}> ${sneakersArr[i].discount}%</div>  
        <div></div>  
        <div  onclick="clickFunc"></div>
    </div>  
    <p>
       <span>${sneakersArr[i].brend} </span> /${sneakersArr[i].description}
    </p> 
    <div> ${sneakersArr[i].price} р. </div>                       
</li>
    `
    
}

function  clickFunc(){
    alert('123')
}
ul.innerHTML = html;
