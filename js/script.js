let articlesList = "json/dB.json"
let listaProductos = [];
let carrito = []
let category = ""


const divCardsContainer = document.getElementById("articlesCards");
const cart = document.getElementById("cart");
const verCarrito = document.getElementById("verCarrito");
const limpiarCarrito = document.getElementById("limpiarCarrito");
const total = document.getElementById("total")
const cartContainer = document.getElementById("cartContainer")
const cerrarModal = document.getElementById("cerrarModal")
const all = document.getElementById("all")
const escolar = document.getElementById("escolar")
const comercial = document.getElementById("comercial")
const papelera = document.getElementById("papelera")


if (!localStorage.getItem(`carrito`)){
    localStorage.setItem(`carrito`, JSON.stringify([]));
};

fetch(articlesList)
    .then(res => res.json())
    .then(data => {
        listaProductos = data
        articlesShow(data)
    })
    .catch((error) => console.log(error))
    .finally( () =>{
    console.log("proceso finalizado");
    })

const articlesShow = (array) => {
  divCardsContainer.innerHTML = ""
  actualizarContador()
  array.forEach((article) => {
    const card = document.createElement("div");
    card.classList.add(
      "col-sm-12",
      "col-md-6",
      "col-lg-4",
      "cardsItem",
      "rounded"
    );
    card.innerHTML = `<div class="d-flex justify-content-between">
                        <div class="cardsImg">
                                <img src="${article.imgSource}" class="card-img-top" alt="${article.description}">
                        </div>
                        <div class="cardsBody card-body d-flex flex-column align-items-between">                                
                                <h5 class="small cardsParagraph">${article.description}</h5>
                                <div class="d-flex w-100 flex-column justify-content-between">
                                    <b class=""> Precio: $${article.price} <b>
                                    <button id="boton${article.id}" class="btn btn-success">Al carrito</button>
                                </div>
                        </div>
                      </div>
                        `;

    divCardsContainer.appendChild(card);

    const botonAgregarProducto = document.getElementById(`boton${article.id}`);
    botonAgregarProducto.addEventListener("click", () => {
      agregarAlCarrito(article.id);
      console.log(botonAgregarProducto);
    });
  });
};

const agregarAlCarrito = (id) => {
  contadorCarrito.innerText = parseInt(contadorCarrito.innerText) + 1
   const articleToCart = carrito.find((el) => el.id === id);
   if (articleToCart) {
     articleToCart.qty++;
   } else {
     const articleAdd = listaProductos.find((el) => el.id === id);
     carrito.push(articleAdd);
     console.log(carrito);
   };
        setearCarritoStorage(carrito);
 };
 
 
 verCarrito.addEventListener("click", () => {
     detalleCarrito();
     articlesHide(); 
 });
 
 const articlesHide = () => {
     cartContainer.style.display = `block`;
     articlesCards.innerHTML = ``;
 };

 const detalleCarrito = () => {
   cart.innerHTML = "";
   carrito = JSON.parse(localStorage.getItem(`carrito`));
   carrito.forEach((el) => {
     const container = document.createElement("div");
     container.classList.add("container");
     container.innerHTML = `<div class="border border-5 d-flex">
                                 <div class="">
                                     <button id="quitar${el.id}" class="btn btn-danger h-100"> Quitar </button> 
                                 </div>
                                 <div class="border border-5 w-100">
                                     <h3 class="p-2">${el.description}</h3>
                                     <div class="d-flex justify-content-between">                            
                                         <img  src="${el.imgSource}" style="height:auto; width:250px;" alt="${el.description}">
                                         <div class=" d-flex flex-column">
                                             <p class="text-center">Un: ${el.qty}</p>
                                             <small class="text-center"> Stock: ${el.stock}</small>
                                             <div>
                                               <button id="eliminar${el.id}" class="text-center btn-danger m-1 fas fa-hand-point-down"></button>
                                               <button id="agregar${el.id}" class="text-center btn-success m-1 fas fa-hand-point-up"></button>
                                             </div>
                                         </div>
                                         <div class= "d-flex justify-content-between">
                                             <p class="p-2">Valor:$${el.price}</p>
                                             <p class="p-2">Total:$${el.price * el.qty}</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>`;
     cart.appendChild(container);
 
     const boton = document.getElementById(`quitar${el.id}`);
     boton.addEventListener("click", () => {
       quitarProducto(el.id);
     });
     const botonEliminar = document.getElementById(`eliminar${el.id}`);
     botonEliminar.addEventListener("click", () => {
       eliminarProducto(el.id);
       
     });
     const botonAgregar = document.getElementById(`agregar${el.id}`);
     botonAgregar.addEventListener("click", () => {
       agregarProducto(el.id);
 
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
 
 const quitarProducto = (id) => {
   const productoAQuitar = carrito.find((el) => el.id === id);
   const indice = carrito.indexOf(productoAQuitar);
   carrito.splice(indice, 1);
    setearCarritoStorage(carrito)
    detalleCarrito()

   if (carrito.length === 0){
       cartContainer.style.display = `none`;
       articlesShow(listaProductos)
   }
   
 };
 
 const eliminarProducto = (id) => {
   const producto = carrito.find((el) => el.id === id)
    if(producto.qty === 1){
     quitarProducto(id)
   } else {
     producto.qty--
   }
    setearCarritoStorage(carrito)
    detalleCarrito()
 
 }
 const agregarProducto = (id) => {
   const producto = carrito.find((el) => el.id === id)
   if (producto.qty < producto.stock){
        producto.qty++
    }
    setearCarritoStorage(carrito)
    detalleCarrito()
   
 }
 
  cerrarModal.addEventListener("click", () => {
     vaciarCarrito()
    });
   
   // vaciamos el carrito
limpiarCarrito.addEventListener("click", () => {
  vaciarCarrito()
  
});
    
const vaciarCarrito = () => {
   carrito = [];
   setearCarritoStorage(carrito);
   quitarProducto();
  

 }
 const setearCarritoStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarContador()
}

 const actualizarContador = () => {
    carrito = JSON.parse(localStorage.getItem(`carrito`))
    const contadorCarrito = document.getElementById("contadorCarrito")
    contadorCarrito.innerText = carrito.reduce((acc, el) => acc + el.qty, 0)
}


all.addEventListener("click", () => { 
  category = ""
  articlesShow(listaProductos)
  cartContainer.style.display = `none`;  
})

escolar.addEventListener("click", () => { 
  category = "Escolar"
  filtrar(category)
})

comercial.addEventListener("click", () => { 
  category = "Comercial"
  filtrar(category)
})

papelera.addEventListener("click", () => { 
  category = "Papelera"
  filtrar(category)
})

const filtrar = (category) => {
  const lista = listaProductos.filter(el => el.category === category)
  localStorage.setItem("category", JSON.stringify(lista))
  const cat = JSON.parse(localStorage.getItem("category"))
  articlesShow(cat)
  cartContainer.style.display = `none`; 
}