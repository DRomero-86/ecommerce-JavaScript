let articlesList = [];
let carrito = [];

class Article {
  constructor(id, description, model, brand, price, stock, imgSource) {
    this.id = id;
    this.description = description;
    this.model = model;
    this.brand = brand;
    this.price = price;
    this.stock = stock;
    this.imgSource = imgSource;
    this.qty = 1;
  }
}

articlesList.push(
  new Article(
    1,
    "Acuarela escolar de 12 colores con un pincel de regalo",
    "Stick",
    "Filgo",
    60,
    120,
    "../multimedia/acuarela_filgo.jpg"
  )
);
articlesList.push(
  new Article(
    2,
    "Adhesivo vinilico 50gr",
    "Trick",
    "Sta",
    20,
    1000,
    "../multimedia/adhesivo_vinilico_sta.jpg"
  )
);
articlesList.push(
  new Article(
    3,
    "Boligrafo con cuerpo triangular punta 1mm",
    "trilux",
    "Faber Castell",
    42,
    500,
    "../multimedia/boligrafo_faber_trilux.jpg"
  )
);
articlesList.push(
  new Article(
    4,
    "Lapiz corrector punta metal 7mm",
    "Plash",
    "Filgo",
    30,
    180,
    "../multimedia/corrector_filgo.jpg"
  )
);
articlesList.push(
  new Article(
    5,
    "Crayones de seda x 12 corto",
    "plain",
    "Faber Castell",
    70,
    320,
    "../multimedia/crayones_faber.png"
  )
);
articlesList.push(
  new Article(
    6,
    "Regla plastica flexible de 15cm",
    "Flex",
    "Maped",
    45,
    1120,
    "../multimedia/regla_maped15.jpg"
  )
);
articlesList.push(
  new Article(
    7,
    "Goma Ultra Mini",
    "Technic",
    "Maped",
    90,
    540,
    "../multimedia//goma_maped.jpg"
  )
);
articlesList.push(
  new Article(
    8,
    "Marcador escolar x 10",
    "Mito",
    "Ezco",
    130,
    400,
    "../multimedia/marcador_escolar_ezco.jpg"
  )
);
articlesList.push(
  new Article(
    9,
    "Lapiz grafito graduacion",
    "GoldFaber",
    "Faber Castell",
    40,
    350,
    "../multimedia/lapiz_faber.png"
  )
);
articlesList.push(
  new Article(
    10,
    "Resma A4 75gr 500hojas",
    "Autor",
    "Ledesma",
    600,
    1000,
    "../multimedia/resma_autor.png"
  )
);

console.log(articlesList);

const divCardsContainer = document.getElementById("articlesCards");
const cart = document.getElementById("cart");
const verCarrito = document.getElementById("verCarrito");
const vaciarCarrito = document.getElementById("vaciarCarrito");
const total = document.getElementById("total")
const cartContainer = document.getElementById("cartContainer")
let contadorCarrito = document.getElementById("contadorCarrito")


const articlesShow = () => {
  //renderiza todos los productos
  articlesList.forEach((article) => {
    const card = document.createElement("div");
    card.classList.add(
      "col-sm-12",
      "col-md-6",
      "col-lg-4",
      "cardsItem",
      "rounded"
    );
    card.innerHTML = `<div class="cardsImg p-2">
                                <img src="${article.imgSource}" class="card-img-top" alt="${article.description}">
                        </div>
                        <div class="cardsBody card-body">                                
                                <h5 class="small cardsParagraph">${article.description}</h5>
                                <div class="d-flex justify-content-between">
                                    <b class=""> Precio: $${article.price} <b>
                                    <button id="boton${article.id}" class="btn btn-success w-75"> Agregar al carrito </button>
                                </div>
                        </div>`;

    divCardsContainer.appendChild(card);

    const botonAgregar = document.getElementById(`boton${article.id}`);
    botonAgregar.addEventListener("click", () => {
      agregarAlCarrito(article.id);
    });
  });
};

const agregarAlCarrito = (id) => {
 contadorCarrito.innerText = parseInt(contadorCarrito.innerText) + 1
  const articleToCart = carrito.find((el) => el.id === id);
  if (articleToCart) {
    articleToCart.qty++;
  } else {
    const articleAdd = articlesList.find((el) => el.id === id);
    carrito.push(articleAdd);
    console.log(carrito);
  }
};

articlesShow();

verCarrito.addEventListener("click", () => {
    detalleCarrito();
    articlesHide(); 
});

const articlesHide = () => {
    cartContainer.style.display = `block`
    articlesCards.innerHTML = ``
}
const detalleCarrito = () => {
  cart.innerHTML = "";

  carrito.forEach((el) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `<div class="border border-5 d-flex">
         <div class="">
         <button id="eliminar${
           el.id
         }" class="btn btn-danger h-100"> Quitar </button> 
         </div>
                                    <div class="border border-5 align-items-between w-100">
                                        <h3 class="p-2">${el.description}</h3>
                                        <div class="d-flex justify-content-between">                            
                                            <img  src="${
                                              el.imgSource
                                            }" style="height:auto;" alt="${
      el.description
    }">
                                            <div>
                                                <p class="p-2">Valor:$${
                                                  el.price
                                                }</p>
                                                <p class="p-2">Un: ${el.qty}</p>
                                                <p class="p-2">Total:$${
                                                  el.price * el.qty
                                                }</p>
                                                </div>
                                                </div>
                                    </div>
                                    </div>`;
    cart.appendChild(container);

    const boton = document.getElementById(`eliminar${el.id}`);
    boton.addEventListener("click", () => {
      eliminarProducto(el.id);
    });
  });

 calcularTotal();
};


const calcularTotal = () => {
  let totalCompra = 0;
  carrito.forEach((el) => {
    totalCompra += el.price * el.qty;
  });

  total.innerHTML = `$${totalCompra}`;
};

const eliminarProducto = (id) => {
  if (contadorCarrito.innerText > 0) {
    contadorCarrito.innerText--
  }
  const productoAEliminar = carrito.find((el) => el.id === id);
  const indice = carrito.indexOf(productoAEliminar);
  carrito.splice(indice, 1);
  
  if (carrito.length === 0){
    cartContainer.style.display = `none`;
    articlesShow()

   }else{
     detalleCarrito()
   }
};

// vaciamos el carrito

vaciarCarrito.addEventListener("click", () => {
  carrito = [];
  detalleCarrito();
});
