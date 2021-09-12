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



// 2. Promocioines en un Supermercado
supermercado = (numero, valor_mercado)=> {
    if(numero < 74){
        let calcular_descuento = (valor_mercado * 0.15);
        let descuento_supermercado = (valor_mercado - calcular_descuento);
        return `Se descuenta $${calcular_descuento} del total de la compra.
        \n El total a pagar con descuento incluido es: $${descuento_supermercado} `;
    }else{
        let calcular_descuento = (valor_mercado * 0.2);
        let descuento_supermercado = (valor_mercado - calcular_descuento);
        return `Se descuenta $${calcular_descuento} del total de la compra.
        \n El total a pagar con descuento incluido es: $${descuento_supermercado} `;
    }
}
console.log(supermercado(75, 500));



// 3. Compañia de seguros
compania_seguros = (monto_fianza) => {
    if(monto_fianza < 50000){
        let cuota = (monto_fianza * 0.03)
        let total_cliente = (cuota + monto_fianza);
        return `La cuota a pagar es de: $${cuota}
        \n El valor a pagar al cliente es de: $${total_cliente}`;
    }else{
        let cuota = (monto_fianza * 0.02)
        let total_cliente = (cuota + monto_fianza);
        return `La cuota a pagar es de: $${cuota}
        \n El valor a pagar al cliente es de: $${total_cliente}`;
    }
}
console.log(compania_seguros(45000));
