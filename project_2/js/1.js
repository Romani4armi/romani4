
var fotoArr=[
    {
        imageTitle:'image/f1.png',
        title:'Фотоаппарат Sony Alpha 7 ILCE-7M3 Body',
        rating:'4.8',
        review:'35',
        price_1:'5650,00 p.',
        price_2:'5820,00 p.',
    },
    {
        imageTitle:'image/f8.png',
        title:'Фотоаппарат Sony Alpha 7 ILCE-7M3 Body',
        rating:'4.8',
        review:'35',
        price_1:'5650,00 p.',
        price_2:'5820,00 p.',
    },
    {
        imageTitle:'image/f5.png',
        title:'Фотоаппарат Sony Alpha 7 ILCE-7M3 Body',
        rating:'4.8',
        review:'35',
        price_1:'5650,00 p.',
        price_2:'5820,00 p.',
    }

]
var ul=document.querySelector(".blocks ul");
var html = '';

for(var i=0; i<fotoArr.length; i++){
    html+=`
    <ol>
    <img src="${fotoArr[i].imageTitle} " width="230px" height="164px" alt="">
    <p>${fotoArr[i].title}</p>
    <div> <span>${fotoArr[i].rating}</span> <span>${fotoArr[i].review} отзывов</span></div>
    <div> <span class="span1">${fotoArr[i].price_1}.</span><span class="span2">${fotoArr[i].price_2}.</span></div>
    <div class="buttom_old"></div>
    <div class="button_5"> <img src="image/busket_wise.png" alt=""> В корзину</div>                                
    </ol>`
}
console.log(html)
ul.innerHTML = html;
