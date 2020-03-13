

JsBarcode(".barcode").init();


let btn = document.getElementById("next-btn")
let index = -1
let produto = document.getElementById("produto")

btn.addEventListener("click", function(){
    if(index == produtos.length-1){index = 0} else{index = index + 1}
    console.log(index + "====" + produtos.length);
    make_bar_code(produtos[index].ean)
    produto.innerHTML=produtos[index].descricao
    console.log(produtos[index].descricao);


})



function make_bar_code(descricao){

JsBarcode("#barcode", descricao, {
    format: "EAN13",
    width: 1,
    height: 30,
    displayValue: true,
    flat: false,
    height: 60, 
    textPosition: "bottom", 
    fontSize: 16,
    background:"white",
    lineColor:"black"

});
}