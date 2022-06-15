    // localStorage.brend
    // localStorage.description
    // localStorage.background
    // localStorage.newSneker
    // localStorage.hit
    // localStorage.discount
    // localStorage.heart
    // localStorage.price
    // localStorage.idProdukt

    









 var heartArr=localStorage.heart.split(',');

localStorage.count=0;
var iconLoadArr=[]; // массив с  выводимыми id
var iconLoadArrRes=[];


for(var i=0; i<sneakersArr.length; i++){ //получение дубликата массива исходных данных
    iconLoadArr[i]= sneakersArr[i].idProdukt; // 
    iconLoadArrRes[i]= sneakersArr[i].idProdukt;
}


function iconLoad(idArr){  //функция для построения иконок для сайта
    var ul=document.querySelector(".card_cneakers");
    var html = '';
    var newSnekerV;
    var hitTovar;
    var discountSneaker;
    var counterIcon=0;

    for(var i=0; i<sneakersArr.length; i++){
        if (idArr.includes(sneakersArr[i].idProdukt)) {
            counterIcon++;
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
    }
    ul.innerHTML = html;
    var kolProdukt = document.getElementById('kvoProdukt'); //вывод количества загрузившихся товаров
    kolProdukt.innerText=counterIcon;
    
}
iconLoad(iconLoadArr);




    localStorage.heart=heartArr.join(',');


    localStorage.brendCheckbox='';
    var brendArr=[];
    var a1;
    var a2;

    

    function sneakerBrend(a){ //фильтр по брендам
    var arr;
       
    if ((typeof a)== 'string') { 
         
        brendArr=localStorage.brendCheckbox.split(','); 
                   
        if ( document.getElementById(a).checked) {
            brendArr.push(a);
           
        } else {
            for (var i=0; i<brendArr.length; i++){
                if (brendArr[i]==a){
                    brendArr[i]='';
                } else {
                    continue
                }
            }
        }
      
    } 
    
     localStorage.brendCheckbox=brendArr.join(',');
 
    console.log('dliina ' + iconLoadArr.length)


     iconLoadArr  = brendToId(brendArr);
    console.log(iconLoadArr)
    
   
    iconLoad(iconLoadArr)
     }
    

 function brendToId(arr){
    var iconLoadArr2=[];
    
    for(var i=0; i<sneakersArr.length; i++){
        if(arr.includes(sneakersArr[i].brend)){
            iconLoadArr2.push(sneakersArr[i].idProdukt)
            
        }
    }
    
    return iconLoadArr2
 }
 var rangeArr =[]; 
 var rangeArr2 =[];
   
 function rangeFilters(a,b){ //a номер ползунка, б значение
    
//iconLoadArr
     for (var i=0; i<iconLoadArr.length; i++){
        if (rangeArr.includes(iconLoadArr[i])) {} else {
            if (a==0&&b>rangeToId(iconLoadArr[i])){
                rangeArr.push(iconLoadArr[i])
                
                iconLoadArr[i]='';
                
            } 
            if (a==1&&b<rangeToId(iconLoadArr[i])){
                rangeArr2.push(iconLoadArr[i])
                
                iconLoadArr[i]='';
                
            } 
            
        }
     }
     for (var i=0; i<rangeArr.length; i++){
        if (a==0&&b<=rangeToId(rangeArr[i])){
            iconLoadArr[rangeArr[i]]=rangeArr[i]
            rangeArr[i]='';
            }
       
        
     }
     for (var i=0; i<rangeArr2.length; i++){
        if (a==1&&b>=rangeToId(rangeArr2[i])){
            iconLoadArr[rangeArr2[i]]=rangeArr2[i]
            rangeArr2[i]='';
    }
     }
     //localStorage.brendCheckbox=iconLoadArr.join(',');
   iconLoad(iconLoadArr)
    
 }
 function rangeToId(a){ //возвращает прайс по id
    for (var i=0;i<sneakersArr.length;i++){
        if(a==sneakersArr[i].idProdukt){
            return sneakersArr[i].price
        }
    }
 }