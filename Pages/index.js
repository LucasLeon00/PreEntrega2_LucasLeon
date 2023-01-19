alert("Ingrese la opcion del producto que desea llevar. Para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-Lana 100 g $150 2-Ajugas de crochet $250 c/u 3-Tejidos a crochet $3400 4-Amigurumis $2800"))

let seleccionarCantidad;

let total = 0;

const cantidad = (cant, precio) => {
    return cant*precio
}



while(seleccionarProductos != 0) {
    switch(seleccionarProductos){
        case 1:
            seleccionarCantidad = Number(prompt("el producto es Lana 100g. Indique la cantidad"))
            
            total += cantidad(seleccionarCantidad, 150)
        break;
        case 2:
            seleccionarCantidad = Number(prompt("el producto es Ajugas de crochet. Indique la cantidad"))
            
            total += cantidad(seleccionarCantidad, 250)
        break;
        case 3:
            seleccionarCantidad = Number(prompt("el producto es Tejidos a crochet. Indique la cantidad"))
            
            total += cantidad(seleccionarCantidad, 3400)
        break;
        case 4:
            seleccionarCantidad = Number(prompt("el producto es Amigurumis. Indique la cantidad"))
           
            total += cantidad(seleccionarCantidad, 2800)
        break;
        default:
            break;
    }
    seleccionarProductos = Number(prompt("1-Lana 100 g $150 2-Ajugas de crochet $250 c/u 3-Tejidos a crochet $3400 4-Amigurumis $2800"))
}

alert("El total de la compra es : " + total)


const envio = () =>{
    if (total >= 3000){
        alert("El envio es gratuito")
    }else{
        total += 780
        alert("El costo de envio es de $780, el total es: " + total)
    }
}
envio()