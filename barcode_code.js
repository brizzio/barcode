

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
    lineColor: "#0aa",
    width: 4,
    height: 40,
    displayValue: true,
    flat: true,
    height: 100, 
    textPosition: "bottom", 
    fontSize: 16,
    lineColor: "#000000",
    background: "#FFFFFF"

});
}