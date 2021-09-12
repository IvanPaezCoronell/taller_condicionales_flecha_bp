// 1. Compra de camisetas
compra_camisas = (n_camisas, valor_camisa) => {
    if(n_camisas >= 3){
        let total_sin_descuento = ((n_camisas * valor_camisa) * 0.3);
        let descuento = (n_camisas * valor_camisa) - total_sin_descuento;
        return `El total a pagar por las camisetas es de: ${descuento}`;
    }else{
        let total_sin_descuento = ((n_camisas * valor_camisa) * 0.1);
        let descuento = (n_camisas * valor_camisa) - total_sin_descuento;
        return `El total a pagar por las camisetas es de: ${descuento}`;
    }
}
console.log(compra_camisas(4, 200)); 
