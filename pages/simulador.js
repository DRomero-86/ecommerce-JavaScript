let nombre = prompt("Hola! Como estás? Escribí tu nombre por favor");
let dinero = parseInt(prompt("Hola " + nombre + " Bienvenido a la heladería. Los precios son:" +  "\n" + 
"Palito: $5" +  "\n" + "Cucurucho: $10" + "\n" + "Tacita: $15" +  "\n" + "Pote 1/4: $20" +  "\n" + "¿cuanto dinero($) dispones:"));
let dineroDiferencia;

if (dinero < 5){
    console.log(nombre + " Debes tener más dinero. El helado más barato es de $5");
} else if (dinero > 4 && dinero < 10){
    dineroDiferencia = (dinero - 5);
    if (dinero == 5){
    console.log(nombre + " te alcanza para un helado de palito");
    } else{
    console.log(nombre + " te alcanza para un helado de palito y te sobran $" + dineroDiferencia);
}} else if (dinero > 9 && dinero < 15){
    dineroDiferencia = (dinero - 10);
    if (dinero == 10){
    console.log(nombre + " te alcanza para un helado de cucurucho");
    } else {
    console.log(nombre + " te alcanza para un helado de cucurucho y te sobran $" + dineroDiferencia);
}} else if (dinero > 14 && dinero < 20){
    dineroDiferencia = (dinero - 15);
    if (dinero == 15){
    console.log(nombre + " te alcanza para un helado de Tacita");
    } else {
    console.log(nombre + " te alcanza para un helado de Tacita y te sobran: $" + dineroDiferencia);
}} else if (dinero > 19){
    dineroDiferencia = (dinero - 20);
    if (dinero == 20){
    console.log(nombre + " te alcanza para 1/4 kilo de helado");
    } else {    
    console.log(nombre + " te alcanza para un 1/4 kilo de helado y te sobran: $" + dineroDiferencia);
}}