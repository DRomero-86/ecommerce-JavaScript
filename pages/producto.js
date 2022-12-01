let listaProductos = [];
class Article{
    constructor(id, descripcion,modelo, marca,precio,stock,imgSource){
        this.id = id;
        this.descripcion = descripcion;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
        this.imgSource = imgSource;
    };    
}; 

listaProductos.push( new Article (1,"Acuarela escolar de 12 colores con un pincel de regalo","Stick","Filgo",60,120,"../multimedia/acuarela_filgo.jpg"));
listaProductos.push( new Article (2,"Adhesivo vinilico 50gr","Trick","Sta",20,1000,"../multimedia/adhesivo_vinilico_sta.jpg"));
listaProductos.push( new Article (3,"Boligrafo con cuerpo triangular punta 1mm","trilux","Faber Castell",42,500,"../multimedia/boligrafo_faber_trilux.jpg"));
listaProductos.push( new Article (4,"Lapiz corrector punta metal 7mm","Plash","Filgo",30,180,"../multimedia/corrector_filgo.jpg"));
listaProductos.push( new Article (5,"Crayones de seda x 12 corto","plain","Faber Castell",70,320,"../multimedia/crayones_faber.png"));
listaProductos.push( new Article (6,"Regla plastica flexible de 15cm","Flex","Maped",45,1120,"../multimedia/regla_maped15.jpg"));
listaProductos.push( new Article (7,"Goma Ultra Mini","Technic","Maped",90,540,"../multimedia//goma_maped.jpg"));
listaProductos.push( new Article (8,"Marcador escolar x 10","Mito","Ezco",130,400,"../multimedia/marcador_escolar_ezco.jpg"));
listaProductos.push( new Article (9,"Lapiz grafito graduacion","GoldFaber","Faber Castell",40,350,"../multimedia/lapiz_faber.png"));
listaProductos.push( new Article (10,"Resma A4 75gr 500hojas","Autor","Ledesma",600,1000,"../multimedia/resma_autor.png"));


let divCardsContainer = document.getElementById(`articles__cards`);
function RenderizarProductos (){
    
    let cardsContainer = "";
    
    for (let i = 0; i < listaProductos.length ; i++) {
        cardsContainer +=   `<div class="col-sm-12 col-md-6 col-lg-4 cards__item">  
                                <div class="cards__img">
                                    <img src="${listaProductos[i].imgSource}" class="card-img-top" alt="${listaProductos[i].descripcion}">
                                </div>
                                <div class="cards__body card-body">
                                <a class="cards__paragraph text-reset" href="#">
                                    <p class="cards__text ">${listaProductos[i].descripcion}</p>
                                </a>
                                </div>
                            </div>`;
    };
    divCardsContainer.innerHTML += cardsContainer;
}         
RenderizarProductos();

     
        
