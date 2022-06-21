    // localStorage.brend
    // localStorage.description
    // localStorage.background
    // localStorage.newSneker
    // localStorage.hit
    // localStorage.discount
    // localStorage.heart
    // localStorage.price
    // localStorage.idProdukt

    







    routePageFunc('<a href="index.html">Главная</a> / <a href="index_catalog.html"> Каталог товаров</a>')
var pageCheck='Каталог товаров';
var heartArr=localStorage.heart.split(',');

localStorage.count=0;
var iconLoadArr=[]; // массив с  выводимыми id
var iconLoadArrRes=[];


for(var i=0; i<sneakersArr.length; i++){ //получение дубликата массива исходных данных
    iconLoadArr[i]= sneakersArr[i].idProdukt; // 
    iconLoadArrRes[i]= sneakersArr[i].idProdukt;
}

function idArrDelete(arr){
   
    for(var i=0; i<arr.length;i++){
        
        if (parseInt(arr[i])+''=='NaN')   {
            arr.splice((i),1);
            idArrDelete(arr);
            break
           
            
        }
        
}

return arr;
}

var counterIconPage = 0;
function iconLoad(idArr){  //функция для построения иконок для сайта
    var ul=document.querySelector(".card_cneakers");
    var html = '';
    var newSnekerV;
    var hitTovar;
    var discountSneaker;
    var counterIcon=counterIconPage;
    var idArr2 = [];
   
    for(var i=0;i<idArr.length;i++){
        idArr2[i]=idArr[i];
    }
   idArr2=idArrDelete(idArr2);
   
    
    for(var i=counterIconPage; i<sneakersArr.length; i++){
        if (idArr.includes(sneakersArr[i].idProdukt)) {
            counterIcon++;
            
        sneakersArr[i].newSneker==true?newSnekerV='style="display:block"':newSnekerV='';
        sneakersArr[i].hit==true?hitTovar='style="display:block"':hitTovar='';
        sneakersArr[i].discount>0?discountSneaker='style="display:block"':discountSneaker='';
     
        heartArr[i]=='false'?heartColor='':heartColor='style="background: url(image/svg/heartRed.svg) center no-repeat;background-size: 90%;"'
         heartArr[i]=='true'?localStorage.count++:true;
     
         
         html+=`
         <li > 
             <div class="up_icon" style="background: url(${sneakersArr[i].background});">
         
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
         <div> ${sneakersArr[i].price} р.  </div>   
          <a/>                   
     </li>
         `
        }
        if (counterIcon==counterIconPage+16)break;
    }
    
    ul.innerHTML = html;
    var kolProdukt = document.getElementById('kvoProdukt'); //вывод количества загрузившихся товаров
    kolProdukt.innerText=idArr2.length;
   pageNumber(Math.ceil(idArr2.length/16))
    
}

function sortingSneker(a){
    iconLoadArr=[];
    for (var i=0; i<sneakersArr.length;i++){
        
        if((a+'')==(sneakersArr[i].gender+'')){
            iconLoadArr.push(sneakersArr[i].idProdukt)
             
        }
        
    }
  
}
var pageCheckGender;
function genderSnecker2(a){ //отправляет в сторож данные о гендере 
    localStorage.genderSnekers=a
    
  }
  console.log(localStorage.genderSnekers)
if(localStorage.genderSnekers==''){
 
} else {
    sortingSneker(localStorage.genderSnekers)
    if (localStorage.genderSnekers=='true'){
        document.getElementById('genderSnekers').innerText='Мужские кроссовки';
        pageCheckGender=`
        <a href="index.html">Главная</a> / <a href="index_catalog.html"> Каталог товаров</a> / 
        <a href="index_catalog.html"> Мужские кроссовоки</a>
     `;
    } else {
        document.getElementById('genderSnekers').innerText='Женские кроссовки';
        pageCheckGender=`
        <a href="index.html">Главная</a> / <a href="index_catalog.html"> Каталог товаров</a> / 
        <a href="index_catalog.html"> Женские кроссовоки</a>
     `;
    }
    routePageFunc(pageCheckGender)
}
iconLoad(iconLoadArr);
localStorage.genderSnekers='';



    localStorage.heart=heartArr.join(',');


    localStorage.brendCheckbox='';
    var brendArr=[];
    var a1;
    var a2;

    

    function sneakerBrend(a){ //фильтр по брендам
    var arr;
    //iconLoadArr   
    if ((typeof a)== 'string') { 
         
       // brendArr=localStorage.brendCheckbox.split(','); 
                   
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
    
     //localStorage.brendCheckbox=brendArr.join(',');
 


     iconLoadArr = brendToId(brendArr) ;
    
    
   
    rangeFilters()
     }
    
     function chekBrendId(a){
        console.log('1  '+a);
        for (var i=0; i<a.length; i++){
            if (iconLoadArr.includes(a[i])){

            } else {
                a[i] = '';
            }
        }
        for (var i=0; i<a.length; i++){
            iconLoadArr[i]=a[i]
        }
        console.log(iconLoadArr)
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
 var a1;
 var b1;
 function rangeFilters(a,b){ //a номер ползунка, б значение
    

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
 
 //путь по странице 
function routePageFunc(a){
   
    var  routePage = document.querySelector('#routePage' )
    routePage.innerHTML= a ;
 
}

function pageNumber(a){ //принимает количество страниц
    var pageNumberVar = document.querySelector('.page_number');
    var htmlPage=``;
    for (var i=1; i<=a;i++){
        htmlPage+=`<li onclick="pageNumberRoute(${i})">${i}</li>`
    }
    var htmlPageNumber = `
    <li onclick="pageNumberRoute('min')">
        <div>&lt;</div>
        <div>Назад</div>
    </li>
     ${htmlPage}
    <li onclick="pageNumberRoute('max')">
        <div>Вперед</div>
        <div>&gt;</div>
    </li>
    
    `
    pageNumberVar.innerHTML=htmlPageNumber;

}
var aZnach=1;
function pageNumberRoute(a){
    
           
        if (a=='min'){
            aZnach--;
            aZnach<=0?aZnach++:true;
            a = aZnach;
        }
        if (a=='max'){
            aZnach++;
            console.log(iconLoadArr.length)
            aZnach>Math.ceil(iconLoadArr.length/16)?aZnach--:true
            a = aZnach;
            console.log(a)
        }
        aZnach = a
        counterIconPage=(a-1)*16;
        
    
   rangeFilters()
}
