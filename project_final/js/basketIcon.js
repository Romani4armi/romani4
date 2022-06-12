var div=document.querySelector('.card_basket');
var html_bask='';
var baskArr=[];
var summa=0;

baskArr  =  localStorage.basketId.split(',')
console.log(baskArr);
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

for(var i=0; i<sneakersArr.length;i++){
   if(baskArr.includes(sneakersArr[i].idProdukt.toString())){
        sneakersArr[i].newSneker==true?newSnekerV='style="display:block"':newSnekerV='';
        sneakersArr[i].hit==true?hitTovar='style="display:block"':hitTovar='';
        sneakersArr[i].discount>0?discountSneaker='style="display:block"':discountSneaker='';
        sneakersArr[i].heart==false?heartColor='':heartColor='style="background: url(image/svg/heartRed.svg) center no-repeat;background-size: 90%;"'
          summa+=(sneakersArr[i].price)*1;
          
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
                                <div>УДАЛИТЬ ТОВАР</div>
                            </li>
                        </ul> 
        </div>
    `
    }}
div.innerHTML=html_bask;
var basketRight = document.querySelector('.basket_right');
var html_summa = '';
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