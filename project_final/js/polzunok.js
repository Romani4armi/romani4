const rangeSlider = document.getElementById('slider_output')
if (rangeSlider){
    noUiSlider.create(rangeSlider, {
    start: [10, 550],
    connect: true,
    step:1,
    range: {
        'min': 10,
        'max': 550,
    }
});
const input0=document.getElementById('i-0');
const input1=document.getElementById('i-1');
const inputs=[input0,input1];
rangeSlider.noUiSlider.on('update', function(values,handle){
    inputs[handle].value=Math.round(values[handle]);
});
const setRangeSlider= (i,value)=>{
    var arr = [null,null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
};
    inputs.forEach((el,index)=>{
        el.addEventListener('change',(e)=>{setRangeSlider(index,e.currentTarget.value);});
    });
}
