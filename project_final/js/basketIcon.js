var div=document.querySelector('.card_basket');
var html_bask='';
var baskArr=[];
var summa=0;
var pageCheck='Корзина';

function deleteProdukt(a){
   var arrayHeart=localStorage.heart.split(',')
   arrayHeart[a]='false';
   localStorage.heart=arrayHeart.join(',');
   localStorage.count--;
 }
baskArr  =  localStorage.basketId.split(',')

for(var i=0;i<baskArr.length;i++){
    var k=1;
    for(var j=(i+1);j<baskArr.length;j++){
       
            if (baskArr[i]==baskArr[j]){
                baskArr[j]=false;
                k++;      
             }
            (k%2)==0?baskArr[i]=false:baskArr[i];
            baskArr[1]==0?baskArr[1]='0':NaN;
}
}

baskArr.pop();
baskArr.shift();

var arrLocal=[];
var arrLocal2;
var k1=0;
arrLocal = localStorage.basketId.split(',');

// console.log('мой масс' + arrLocal)
// for(var i=0; i<arrLocal.length;i++){
//     if(Number(arrLocal[i])!=NaN){
//         arrLocal2[k]=arrLocal[i];
//     }
// }
// console.log('мой масс2' + arrLocal2)
var counterProduct=0 ;
var counter_P = document.getElementById('prudukt_counter');
var arrBasket=localStorage.heart.split(',');
console.log(arrBasket);
for(var i=0; i<sneakersArr.length;i++){
   if(arrBasket[i]=='true'){
        sneakersArr[i].newSneker==true?newSnekerV='style="display:block"':newSnekerV='';
        sneakersArr[i].hit==true?hitTovar='style="display:block"':hitTovar='';
        sneakersArr[i].discount>0?discountSneaker='style="display:block"':discountSneaker='';
        sneakersArr[i].heart==false?heartColor='':heartColor='style="background: url(image/svg/heartRed.svg) center no-repeat;background-size: 90%;"'
          summa+=(sneakersArr[i].price)*1;
          counterProduct++;
    html_bask+=`
        <div>
                        <div style="background:url(${sneakersArr[i].background})center center no-repeat,#f3f3f399;"></div>
                        <ul>
                            <li>${sneakersArr[i].description}</li>
                            <li>Цвет: розовый</li>
                            <li>Размер: 38 RUS</li>
                            <li>Арт.: 371125</li>
                            <li>${sneakersArr[i].price} р.</li>
                            <li>
                                <div>ИЗМЕНИТЬ</div>
                                <div> <a href="basket.html"> <button onclick="deleteProdukt(${sneakersArr[i].idProdukt})">УДАЛИТЬ ТОВАР</button> </a></div>
                            </li>
                        </ul> 
        </div>
    `
    }}
div.innerHTML=html_bask;
var basketRight = document.querySelector('.basket_right');
var html_summa = '';
function summaKurier(){
        summa+=5;
}
 html_summa = `
 <div>
                        <ul>
                            <li>
                                <div>Ваш заказ</div>
                                
                            </li><hr>
                            <li>
                                <div>Сумма: </div>
                                <div>${summa} р</div>
                            </li>
                            <li>
                                <div>Скидка: </div>
                                <div>0 р</div>
                            </li>
                            <li>
                                <div>Доставка: </div>
                                <div>0 р</div>
                                
                            </li><hr>
                            <li>
                                <div>Итого:</div>
                                <div>${summa} р</div>
                            </li>
                        </ul>
                        <input class="basket basket_1" type="button" name="basket" value="ОФОРМИТЬ ЗАКАЗ"> <br>
                        <input type="text" name="promocod" class=" promocod" placeholder="Введите промокод">
                        <input type="button" name="promocod_button" class=" promocod_button" value="ПРИМЕНИТЬ">
                    </div>
 `
 basketRight.innerHTML= html_summa;
 counter_P.innerText=counterProduct;
 localStorage.heart=arrBasket.join(',');
 function genderSneker(a){ //отправляет в сторож данные о гендере 
    localStorage.genderSnekers=a
    
  }