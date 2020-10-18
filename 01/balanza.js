var monedas=[5,5,5,7,5,5,5];
//var monedas=[5,5,7,5,5,5,5];


var maspesada =(monedas)=>{
    //retorna el indice de la moneda mas pesada
    
    var moneda = 0;
    var left=[];
    var right=[];
    var mid = Math.floor(monedas.length/2);
    var wLeft = 0;
    var wRight = 0;
    for(var i =0 ; i<mid ;i++){
        wLeft +=monedas[i];
        left.push(monedas[i])
    }
    for(var i =mid+1 ; i<monedas.length ;i++){
        wRight +=monedas[i];
        right.push(monedas[i])
    }

    if(wLeft==wRight){
        
        return mid;
    }

    if(wLeft>wRight){
        
    }else{

    }
    

}
var moneda = maspesada(monedas)
console.log(moneda)