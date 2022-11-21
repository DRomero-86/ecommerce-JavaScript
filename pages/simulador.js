const lapicesColores6 = 30;
const crayones12 = 35;
const gomaBorrar = 15;
const regla30 = 25;
const sacapuntas = 10;
const papelGlace = 14;
const lapizNegro = 12;
let codProducto = 0;
let precioProducto = 0;
let nombreProducto= "";
const multiplica = (x1,x2)=> x1 * x2;
const suma = (x1,x2)=> x1 + x2;


let nombre = prompt("Ingrese su nombre");
do{
    codProducto = Number(prompt(`${nombre} los precios son los siguientes:
    cod(001)- Lapices de colores x 6 : $ ${lapicesColores6}
    cod(002)- Crayones x 12: $ ${crayones12}
    cod(003)- Goma de borrar: $ ${gomaBorrar}
    cod(004)- Regla 30 cm: $ ${regla30}
    cod(005)- Sacapuntas : $ ${sacapuntas}
    cod(006)- Lapiz negro: $ ${lapizNegro}
    Escribe el código del producto que desea comprar
    Presione 0(CERO) o una letra para terminar`));
    switch (codProducto){
        case(1 || 01 || 001):
            precioProducto = lapicesColores6;
            nombreProducto = "Lapices de colores x 6";
        case(2|| 02 || 002):
            precioProducto = crayones12;
            nombreProducto = "Crayones x 12 ";
            break;
        case(3|| 03 || 003):
            precioProducto = gomaBorrar;
            nombreProducto = "Goma de borrar:" ;
            break;
        case(4|| 04 || 004):
            precioProducto = regla30;
            nombreProducto = "Regla 30 cm";
            break;
        case(5|| 05 || 005):
            precioProducto = sacapuntas;
            nombreProducto = "Sacapuntas";
            break;
        case(6|| 06 || 006):
            precioProducto = lapizNegro;
            nombreProducto = "Lapiz negro";
            break;
        default:
            break;
    }

    //Si el input está dentro del rango correcto continúa el proceso deseado en "else"
    if(codProducto === 0){ 
        break;
    } else if (codProducto < 1 || codProducto > 6 ){ // valida input fuera de rango
        alert("Por favor ingrese el codigo correcto");
        break;
    } else if (isNaN(codProducto)){
        break;
    } else{ 
        let cantidad = Number(prompt(`Ingrese la cantidad de ${nombreProducto} que desea`));
        while (isNaN(cantidad)){
            cantidad = Number(prompt(`Ha igresado un valor incorrecto. Por favor ingrese la cantidad de ${nombreProducto} que desea`));
        }
        if (cantidad == 0){
        break;
        } else {
        let parcial = multiplica (precioProducto,cantidad);
        let resultadoParcial = (`${cantidad} ${nombreProducto} de $${precioProducto} c/u = $${parcial}`);
        let resultadoTotal = suma(suma(resultadoTotal,"\n"),resultadoParcial);
        let total = suma (total,parcial)
    }
}
}while ((codProducto || cantidad) !== 0);

let resultadoMostrar = suma(suma(resultadoTotal,"\n"),`El total es de $${total}`);
console.log(resultadoMostrar);

