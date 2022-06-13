    // localStorage.brend
    // localStorage.description
    // localStorage.background
    // localStorage.newSneker
    // localStorage.hit
    // localStorage.discount
    // localStorage.heart
    // localStorage.price
    // localStorage.idProdukt

    







var brend=document.getElementById('nike');
var ul=document.querySelector(".card_cneakers");
var html = '';
var newSnekerV;
var hitTovar;
var discountSneaker;
function brend(a){
    for(var i=0; i<sneakersArr.length; i++){
        if(a==sneakersArr[i].brend){
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
        }
    }

    var heartArr=[];
heartArr=localStorage.heart.split(',');
console.log('mass '  + heartArr);
console.log(' stor ' + localStorage.heart);
localStorage.count=0;
for(var i=0; i<sneakersArr.length; i++){

   sneakersArr[i].newSneker==true?newSnekerV='style="display:block"':newSnekerV='';
   sneakersArr[i].hit==true?hitTovar='style="display:block"':hitTovar='';
   sneakersArr[i].discount>0?discountSneaker='style="display:block"':discountSneaker='';

   heartArr[i]=='false'?heartColor='':heartColor='style="background: url(image/svg/heartRed.svg) center no-repeat;background-size: 90%;"'
    heartArr[i]=='true'?localStorage.count++:true;

    
    html+=`
    <li > 
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

var checkboxBrend = document.getElementsByTagName('input');
localStorage.heart=heartArr.join(',');
ul.innerHTML = html;
var kolProdukt = document.getElementById('kvoProdukt');
    kolProdukt.innerText=sneakersArr.length;