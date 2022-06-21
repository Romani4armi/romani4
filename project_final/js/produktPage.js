var pageCheck='Страница товара';
var div=document.querySelector(".sneaker_produkt");
var html_prod = '';
var arrBasket = localStorage.heart.split(',');
console.log(arrBasket);

for(var i=0; i<sneakersArr.length; i++){
    if( localStorage.test==sneakersArr[i].idProdukt){
  html_prod+=`
  <ul>
        <li><a onclick="localStorage.test = ${sneakersArr[i].idProdukt}"  href="productPage.html"><div style="background: url(${sneakersArr[i].background}) center no-repeat;  background-size: 100%;"></div></a></li>
        <li><a onclick="localStorage.test = ${sneakersArr[i].idProdukt}"  href="productPage.html"><div style="background: url(${sneakersArr[i].background}) center no-repeat;  background-size: 100%;"></div></a></li>
        <li><a  onclick="localStorage.test = ${sneakersArr[i].idProdukt}"  href="productPage.html"><div style="background: url(${sneakersArr[i].background}) center no-repeat;  background-size: 100%;"></div></a></li>
        <li><a  onclick="localStorage.test = ${sneakersArr[i].idProdukt}"  href="productPage.html"><div style="background: url(${sneakersArr[i].background}) center no-repeat;  background-size: 100%;"></div></a></li>
                            
  </ul>
  <a  onclick="localStorage.test = ${sneakersArr[i].idProdukt}"  href="productPage.html">
  <div style="background: url(${sneakersArr[i].background}) center no-repeat;  background-size: 100%;"></div>
    </a>                    

  `} else {
    continue;
  }
}

div.innerHTML=html_prod;
var div_3 = document.querySelector('.card_cneakers');
var html_card_cneakers='';
var idProdukt_local; 
var div_2=document.querySelector(".reviews");
var html_prod_2 = '';
var html_prod_3 = '';
for(var i=0; i<sneakersArr.length; i++){
    if( localStorage.test==sneakersArr[i].idProdukt){
        var colorHeard='';
        arrBasket[i]=='true'?colorHeard='style="background: url(image/svg/heartRed.svg) center no-repeat; background-size:90%"':true;
        idProdukt_local=i;
  html_prod_2+=`
  <div>${sneakersArr[i].brend}</div>
  <div>${sneakersArr[i].description}</div>
  <div>
      <div>${sneakersArr[i].price}р.</div>
      <div>Арт.: ${sneakersArr[i].idProdukt }</div>
  </div>
  <form action="https://fe.it-academy.by/TestForm.php">
      <select name="heading" class="select_0">
          <option value="r0"> Выбрать размер</option>
          <option value="r34"> 34 </option>
          <option value="r35"> 35 </option>
          <option value="r36"> 36 </option>
          <option value="r37"> 37 </option>
          <option value="r38"> 38 </option>
          <option value="r39"> 39 </option>
          <option value="r40"> 40 </option>
          <option value="r41"> 41 </option>
          <option value="r42"> 42 </option>
          <option value="r43"> 43 </option>
          <option value="r44"> 44 </option>
          <option value="r45"> 45 </option>

      </select>
      
  </form>
  <div>Таблица размеров</div>
  <input onclick="pushBasket(${sneakersArr[i].idProdukt})" class="basket" type="button" name="basket" value="добавить в корзину">
  <input onclick="clickFunc2(${sneakersArr[i].idProdukt})" class="basket_heart" ${colorHeard} type="button_heart" id="basket_heart" name="basket_heart" >
  <div>Условия доставки</div>
  <div>О товаре</div>
  <div>Кроссовки выполнены из полупрозрачного полимерного материала, искусственной кожи и текстиля. Детали: шнуровка, текстильная внутренняя отделка, подошва с видимой амортизацией Air под стопой и блоком Zoom Air в передней части стопы для максимального комфорта.</div>
  <div>Материал верха:<b> искуссственная кожа, полимер</b></div>
  <div>Материал подошвы: <b>резина</b></div>
  
  <div>Подробнее</div>
  <hr>
  <div>
      <div>Отзывы</div>
      <div>
          <img src="image/star_1.png" alt="">
          <img src="image/star_1.png" alt="">
          <img src="image/star_1.png" alt="">
          <img src="image/star_1.png" alt="">
          <img src="image/star_1.png" alt="">
          <span>31</span>    
      </div>
  </div>
  <div>Оставить свой отзыв</div>
  <ul>
      <li class="reviews_sneaker">
          <div>
              <div>
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
              </div>
              <div>Владислава</div>
          </div>
          <div>Отличные кроссовки! Очень удобные и легкие. Ношу не снимая каждый день. Идут размер в размер.</div>
      </li>
      <li class="reviews_sneaker">
          <div>
              <div>
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
              </div>
              <div>Владислава</div>
          </div>
          <div>Отличные кроссовки! Очень удобные и легкие. Ношу не снимая каждый день. Идут размер в размер.</div>
      </li>
      <li class="reviews_sneaker">
          <div>
              <div>
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
                  <img src="image/star_1.png" alt="">
              </div>
              <div>Владислава</div>
          </div>
          <div>Отличные кроссовки! Очень удобные и легкие. Ношу не снимая каждый день. Идут размер в размер.</div>
      </li>
      
      
  </ul>
  <div>Больше отзывов</div>
      
      <hr>

  `
  
} else {
    continue;
  }
}
div_2.innerHTML=html_prod_2;
idProdukt_local==(sneakersArr.length-1)?idProdukt_local--:idProdukt_local;
idProdukt_local==0?idProdukt_local++:idProdukt_local;
for(var i=(idProdukt_local-1);i<(idProdukt_local+2);i++){
    sneakersArr[i].newSneker==true?newSnekerV='style="display:block"':newSnekerV='';
    sneakersArr[i].hit==true?hitTovar='style="display:block"':hitTovar='';
    sneakersArr[i].discount>0?discountSneaker='style="display:block"':discountSneaker='style="display:none"';
html_prod_3+=
`

  <li > <a onclick="localStorage.test = ${sneakersArr[i].idProdukt}"  href="productPage.html">
                            <div class="card_sneakers_background" style="background: url(${sneakersArr[i].background}) center center no-repeat, #f3f3f399; background-size: 100%;">
                                <div></div>
                                <div ${newSnekerV}>новинка</div>
                                <div ${hitTovar}>хит</div>
                                <div ${discountSneaker}> - ${sneakersArr[i].discount} %</div>    
                                <div ></div>
                            </div>  
                            <p>
                               <span>${sneakersArr[i].brend} </span> /  ${sneakersArr[i].description} 
                            </p> 
                            <div>${sneakersArr[i].price} р</div>                       
                      </a>  </li>
                       

  `      
}
div_3.innerHTML=html_prod_3;


localStorage.smotr+=','+localStorage.test;

var div_4 = document.querySelector('ul.card_cneakers:last-child');
var html_nice='';

var localStorArr=localStorage.smotr.split(',');

var x1;
for(var i=0;i<3;i++){
    x1=(localStorArr.pop());
    
    sneakersArr[x1].newSneker==true?newSnekerV='style="display:block"':newSnekerV='';
    sneakersArr[x1].hit==true?hitTovar='style="display:block"':hitTovar='';
    sneakersArr[x1].discount>0?discountSneaker='style="display:block"':discountSneaker='style="display:none"';
   
  
    html_nice+=` 
    <li> <a onclick="localStorage.test = ${sneakersArr[x1].idProdukt}"  href="productPage.html">
                            <div class="card_sneakers_background" style="background: url(${sneakersArr[x1].background}) center center no-repeat, #f3f3f399; background-size: 100%;">
                                <div></div>
                                <div ${newSnekerV}>новинка</div>
                                <div ${hitTovar}>хит</div>
                                <div ${discountSneaker}> - ${sneakersArr[x1].discount} %</div>    
                                <div ></div>
                            </div>  
                            <p>
                               <span>${sneakersArr[x1].brend} </span> /  ${sneakersArr[x1].description} 
                            </p> 
                            <div>${sneakersArr[x1].price} р</div>                       
                      </a>  </li>
                       
    `
}
div_4.innerHTML=html_nice;


function genderSneker(a){ //отправляет в сторож данные о гендере 
    localStorage.genderSnekers=a
    
  }

