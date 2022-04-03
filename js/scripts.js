/* =====================Inicio Proyecto Final========================= */ 
let dolarOficial = 0;
let arregloFiltrado = [];
let listadoClientes = [];
let usuarioActual = "Invitado"
let formularioNew = " ";
let arregloCarrito = (localStorage.getItem('carrito')) ? JSON.parse(localStorage.getItem('carrito')) : [];
// let productosTotales = (localStorage.getItem('prodencarrito')) ? parseInt(JSON.parse(localStorage.getItem('prodencarrito'))) : 0;
let productosTotales = 0;
let arregloComplementario = [];
let carroActivo = false;
let noValidoAun = true;

class Cliente{
    constructor(dni, nombre, email, clave){
        this.dni=dni;
        this.nombre=nombre;
        this.email = email;
        this.clave = clave;
    }
}
// actualizarProdCarritos(parseInt(productosEnCarrrito));

listadoClientes = (localStorage.getItem('usuarios')) ? JSON.parse(localStorage.getItem('usuarios')) : [];
let nuestrosVinos = [{
    nombre: "DV Catena",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 2100,
    foto: '../assets/dvcatena.png',
    unidades: 0
},
{
    nombre: "Carmelo Patti",
    cepa: "Cabernet Franc",
    origen: "Mendoza",
    precio: 1620,
    foto: '../assets/carmelopatticf.png',
    unidades: 0
},
{
    nombre: "Amalaya",
    cepa: "Malbec",
    origen: "Salta",
    precio: 1600,
    foto: '../assets/amalaya.png',
    unidades: 0
},
{
    nombre: "Luca",
    cepa: "Blend",
    origen: "Mendoza",
    precio: 3150,
    foto: '../assets/lucabesodedante.png',
    unidades: 0
},
{
    nombre: "Saint Felicien",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 1700,
    foto: '../assets/saintfelicien.png',
    unidades: 0
},
{
    nombre: "Trumpeter",
    cepa: "Syrah",
    origen: "Mendoza",
    precio: 1260,
    foto: '../assets/trumpeter.png',
    unidades: 0
},
{
    nombre: "Obra Prima",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 1900,
    foto: '../assets/obraprima.png',
    unidades: 0
},
{
    nombre: "Riccitelli",
    cepa: "Merlot",
    origen: "Mendoza",
    precio: 5200,
    foto: '../assets/riccitelli.png',
    unidades: 0
},
{
    nombre: "Siesta",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 4950,
    foto: '../assets/siesta.png',
    unidades: 0
},
{
    nombre: "Numina",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 1650,
    foto: '../assets/numina.png',
    unidades: 0
},
{
    nombre: "Las Perdices",
    cepa: "Cabernet Sauvignon",
    origen: "Mendoza",
    precio: 1150,
    foto: '../assets/lasperdicescs.png',
    unidades: 0
},
{
    nombre: "Nicasia",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 950,
    foto: '../assets/nicasia.png',
    unidades: 0
},
{
    nombre: "Fabre Montmayou",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 825,
    foto: '../assets/fabremontmayou.png',
    unidades: 0
},
{
    nombre: "Pispi",
    cepa: "Blend",
    origen: "Mendoza",
    precio: 1275,
    foto: '../assets/pispi.png',
    unidades: 0
},
{
    nombre: "Raza",
    cepa: "Malbec",
    origen: "La Rioja",
    precio: 850,
    foto: '../assets/raza.png',
    unidades: 0
},
{
    nombre: "Navarro Correas",
    cepa: "Merlot",
    origen: "Mendoza",
    precio: 750,
    foto: '../assets/navarrocorreas.png',
    unidades: 0
},
{
    nombre: "Saurus",
    cepa: "Pinot Noir",
    origen: "Neuquen",
    precio: 850,
    foto: '../assets/saurus.png',
    unidades: 0
},
{
    nombre: "Carmine Granata",
    cepa: "Pinot Noir",
    origen: "Mendoza",
    precio: 1170,
    foto: '../assets/carminegranata.png',
    unidades: 0
},
{
    nombre: "Tucumen",
    cepa: "Petit Verdot",
    origen: "Mendoza",
    precio: 990,
    foto: '../assets/tucumen.png',
    unidades: 0
},
{
    nombre: "Casa Boher",
    cepa: "Blend",
    origen: "Mendoza",
    precio: 4410,
    foto: '../assets/casaboher.png',
    unidades: 0
},
{
    nombre: "Zuccardi",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 1305,
    foto: '../assets/zuccardi.png',
    unidades: 0
},
{
    nombre: "Alambrado",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 700,
    foto: '../assets/alambrado.png',
    unidades: 0
},
{
    nombre: "Peq Producciones",
    cepa: "Syrah",
    origen: "Mendoza",
    precio: 3880,
    foto: '../assets/pequenas.png',
    unidades: 0
},
{
    nombre: "DON",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 6350,
    foto: '../assets/don.png',
    unidades: 0
},
{
    nombre: "Domingo Molina",
    cepa: "Petit Verdot",
    origen: "Salta",
    precio: 2450,
    foto: '../assets/domingomolina.png',
    unidades: 0
},
{
    nombre: "Leo",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 950,
    foto: '../assets/leo.png',
    unidades: 0
},
{
    nombre: "Ala Colorada",
    cepa: "Petit Verdot",
    origen: "Mendoza",
    precio: 1450,
    foto: '../assets/alacolorada.png',
    unidades: 0
},
{
    nombre: "Piattelli",
    cepa: "Malbec",
    origen: "Salta",
    precio: 1300,
    foto: '../assets/piattelli.png',
    unidades: 0
},
{
    nombre: "Trinita",
    cepa: "Blend",
    origen: "Mendoza",
    precio: 5200,
    foto: '../assets/trinita.png',
    unidades: 0
},
{
    nombre: "Laur",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 3025,
    foto: '../assets/laur.png',
    unidades: 0
},
{
    nombre: "Gran Enemigo",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 5600,
    foto: '../assets/granenemigo.png',
    unidades: 0
},
{
    nombre: "Mara",
    cepa: "Petit Verdot",
    origen: "Mendoza",
    precio: 1710,
    foto: '../assets/mara.png',
    unidades: 0
},
{
    nombre: "Rutini",
    cepa: "Cabernet Sauvignon",
    origen: "Mendoza",
    precio: 2890,
    foto: '../assets/rutini.png',
    unidades: 0
},
{
    nombre: "Cuvelier los Andes",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 1800,
    foto: '../assets/cuvelierlosandes.png',
    unidades: 0
},
{
    nombre: "Clos de los siete",
    cepa: "Blend",
    origen: "Mendoza",
    precio: 1200,
    foto: '../assets/clos.png',
    unidades: 0
},
{
    nombre: "La Puerta",
    cepa: "Malbec",
    origen: "La Rioja",
    precio: 750,
    foto: '../assets/lapuerta.png',
    unidades: 0
},
{
    nombre: "Barroco",
    cepa: "Pinot Noir",
    origen: "Mendoza",
    precio: 4300,
    foto: '../assets/barroco.png',
    unidades: 0
},
{
    nombre: "La Mascota",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 1350,
    foto: '../assets/lamascota.png',
    unidades: 0
},
{
    nombre: "Animal",
    cepa: "Syrah",
    origen: "Mendoza",
    precio: 950,
    foto: '../assets/animal.png',
    unidades: 0
},
{
    nombre: "Septima",
    cepa: "Pinor Noir",
    origen: "Mendoza",
    precio: 1700,
    foto: '../assets/septima.png',
    unidades: 0
},
{
    nombre: "Mosquita Muerta",
    cepa: "Blend",
    origen: "Mendoza",
    precio: 2300,
    foto: '../assets/mosquita.png',
    unidades: 0
},
{
    nombre: "La Luisa",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 800,
    foto: '../assets/laluisa.png',
    unidades: 0
},
{
    nombre: "Aguijon de Abeja",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 925,
    foto: '../assets/aguijon.png',
    unidades: 0
},
{
    nombre: "Encuentro",
    cepa: "Malbec",
    origen: "Mendoza",
    precio: 1350,
    foto: '../assets/encuentro.png',
    unidades: 0
}]


function listarVinos(){
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(data => {
    let {oficial} = data
    dolarOficial = oficial;
    document.getElementById('tablaVinos').innerHTML="";
    let listado = document.getElementById('tablaVinos');
    nuestrosVinos.forEach((vinoEnArray, indice) => {
            let valorCalculo = parseInt(vinoEnArray.precio); 
            let calculo = (valorCalculo/dolarOficial).toFixed(2);

            listado.innerHTML += `
            <div class="ordenyprogreso">
                <div class="orden">
                    <div class="card" id="index${indice} style="width: 18rem;">
                        <div class="card-body dimension tamano">               
                            <img src="${vinoEnArray.foto}">
                        </div> 
                    </div>     
                    <div class="card" id="index${indice} style="width: 18rem;">
                        <div class="card-body dimension tamano2">  
                            <h5 class="card-title">${vinoEnArray.nombre}</h5>    
                            <p class="card-text">${vinoEnArray.cepa} </p>
                            <p class="card-text">Origen: ${vinoEnArray.origen} </p>
                            <p class="card-text">Precio: $${vinoEnArray.precio} </p>
                            <p class="card-text">Precio: U$S${calculo} </p>
                            <div>
                                <button id="botonMenos${indice}" class="botonMedida" onclick="restarCantidad(${indice})">-</button>
                                <input type="text" id="input${indice}" class="botonMedida" value=1 ></input>
                                <button id="botonMas${indice}" class="botonMedida" onclick="sumarCantidad(${indice})">+</button>
                            </div>
                            <button id="boton${indice}" class="btn btn-danger" onclick="agregarAlCarrito(${indice})">Agregar al carrito</button>
                        </div> 
                    </div>          
                </div>
            </div>    
        `
    })
})
}


function mostrarFiltrados(arregloFiltrado){
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(data => {
        let {oficial} = data
        dolarOficial = oficial;
        
        let listado = document.getElementById('tablaVinos');
        listado.innerHTML = " ";
        arregloFiltrado.forEach((vinoEnArray, indice) => {
                let calculo = ((vinoEnArray.precio)/dolarOficial).toFixed(2);
                listado.innerHTML += `
                <div class="ordenyprogreso">
                    <div class="orden">
                        <div class="card" id="tindex${indice} style="width: 18rem;">
                            <div class="card-body dimension tamano">               
                                <img src="${vinoEnArray.foto}">
                            </div> 
                        </div>     
                        <div class="card" id="index${indice} style="width: 18rem;">
                            <div class="card-body dimension tamano2">  
                                <h5 class="card-title">${vinoEnArray.nombre}</h5>    
                                <p class="card-text">${vinoEnArray.cepa} </p>
                                <p class="card-text">Origen: ${vinoEnArray.origen} </p>
                                <p class="card-text">Precio: $${vinoEnArray.precio} </p>
                                <p class="card-text">Precio: U$S${calculo} </p>
                                <div>
                                    <button id="botonMenos${indice}" class="botonMedida" onclick="restarCantidad(${indice})">-</button>
                                    <input type="text" id="input${indice}" class="botonMedida" value=1 ></input>
                                    <button id="botonMas${indice}" class="botonMedida" onclick="sumarCantidad(${indice})">+</button>
                                </div>
                                <button id="boton${indice}" class="btn btn-danger" onclick="agregarAlCarritoBis(${indice})">Agregar al carrito</button>
                            </div> 
                        </div>          
                    </div>
                </div>    
            `
        })
    })
    arregloComplementario = arregloFiltrado;
    console.table(arregloComplementario)
}

function restarCantidad(posicion){
    let momentanea = "input"+posicion;
    let parametro = parseInt(document.getElementById(momentanea).value);
    if(parametro >1){
        document.getElementById(momentanea).value = (parametro-1);
    }
}

function sumarCantidad(posicion){
    let momentanea = "input"+posicion;
    let parametro = parseInt(document.getElementById(momentanea).value);
    document.getElementById(momentanea).value = (parametro +1);
}

function quitarFiltros(){
    listarVinos();
    for(i=0; i<13; i++){
        const cadena = "check";
        let unParametro = cadena.concat(i)
        let box = document.getElementById(unParametro);
        box.attr("checked",false);

    }
}

function realizarFiltros(){
    let arregloCepas = [];
    let arregloOrigen = [];
    const cadena = "check";
    //los check del 1 al 8 pertenecen a Cepas
    for (i=1; i<9;i++){
        const cadena = "check";
        let unParametro = cadena.concat(i)
        if(document.getElementById(unParametro).checked){
            let nuevoFiltro = document.getElementById(unParametro).name
            arregloCepas.push(nuevoFiltro);
        }
    }
    //los check del 9 al 11 pertenecen a Cepas
    for (i=9; i<13;i++){
        const cadena = "check";
        let unParametro = cadena.concat(i)
        if(document.getElementById(unParametro).checked){
            let nuevoFiltro = document.getElementById(unParametro).name
            arregloOrigen.push(nuevoFiltro);
        }
    }
    //En este IF agregar si se seleccionaron todos y mostrar tooodos los vinos
    if(((arregloCepas.length==0) && (arregloOrigen.length==0)) || ((arregloCepas.length==8) && (arregloOrigen.length==4))){
        listarVinos();
    }else if(arregloCepas.length==0){
        mostrarVinosPorOrigen(arregloOrigen);
    }else if(arregloOrigen.length==0){
        mostrarVinosPorCepas(arregloCepas);
    } else{
        mostrarVinosPorCepaYOrigen(arregloCepas, arregloOrigen);
    }
}

function mostrarVinosPorCepas(arregloCepas){
    let arregloConFiltros = [];
    for(i=0;i<arregloCepas.length;i++){
        let idCepa = arregloCepas[i];
        for(j=0;j<nuestrosVinos.length;j++){
            if(nuestrosVinos[j].cepa == idCepa){
                arregloConFiltros.push(nuestrosVinos[j])
                //armar un arreglo paralelo para los index
            }
        }
    }
    mostrarFiltrados(arregloConFiltros)
}

function mostrarVinosPorOrigen(arregloOrigen){
    let arregloConFiltros = [];
    for(i=0;i<arregloOrigen.length;i++){
        let idOrigen = arregloOrigen[i];
        for(j=0;j<nuestrosVinos.length;j++){
            if(nuestrosVinos[j].origen == idOrigen){
                arregloConFiltros.push(nuestrosVinos[j])
            }
        }
    }
    mostrarFiltrados(arregloConFiltros)
}

function mostrarVinosPorCepaYOrigen(arregloCepas, arregloOrigen){
    let arregloConFiltros = [];
    
    for(i=0;i<arregloOrigen.length;i++){
        let idOrigen = arregloOrigen[i];
        for(j=0;j<arregloCepas.length;j++){
            let idCepa = arregloCepas[j];
            for(k=0;k<nuestrosVinos.length;k++){
                if((nuestrosVinos[k].cepa == idCepa) && (nuestrosVinos[k].origen == idOrigen)){
                    arregloConFiltros.push(nuestrosVinos[k])
                }
            }
        }
    }
    if (arregloConFiltros.length ===0){
        alert("no hay vinos que mostrar")
    }else {
        mostrarFiltrados(arregloConFiltros);
    }
}

//Boton agregar al carrito. Verificamos cantidad y llamamos a sumarAlCarro
function agregarAlCarrito(index){
    let busqueda = "input".concat(index);
    let cantUnidades = document.getElementById(busqueda).value;
    if(cantUnidades>0){
        alert('Agregaste ' + nuestrosVinos[index].nombre + ' al carrito')
        //Volver a 1 el input de cantidad
        sumarAlCarro(nuestrosVinos[index], cantUnidades);
        document.getElementById(busqueda).value =1;
    }
}

//SE define una función Bis para tratar el arreglo filtrado.
function agregarAlCarritoBis(index){
    let busqueda = "input".concat(index);
    let cantUnidades = document.getElementById(busqueda).value;
    if(cantUnidades>0){
        alert('Agregaste ' + arregloComplementario[index].nombre + ' al carrito')
        //Volver a 1 el input de cantidad
        sumarAlCarro(arregloComplementario[index], cantUnidades);
    }
}

//Recibe un objeto Vino y la cantidad que compró
function sumarAlCarro(objVino, cantidad){
        //chequeamos si el producto ya está incluido en el arreglo
        if(productosTotales>0){
            for(i=0;  i<arregloCarrito.length; i++){
                //si está en el carrito, actualizamos cantidad
                if(objVino.nombre == arregloCarrito[i].nombre){
                    alert("Ya estaba");
                    arregloCarrito[i].unidades = parseInt(arregloCarrito[i].unidades) + parseInt(cantidad);
                    i = arregloCarrito.length; //lo igualo para cortar el for
                }else if(i === parseInt(arregloCarrito.length-1)){
                    //si no esta en el carrito, lo agregamos
                    objVino.unidades= parseInt(cantidad);
                    arregloCarrito.push(objVino);
                    alert("vino cargado")
                    i = arregloCarrito.length; //lo igualo para cortar el for
                    }
            }
            productosTotales = parseInt(productosTotales) + parseInt(cantidad);    
        }else{
            objVino.unidades= parseInt(cantidad);
            arregloCarrito.push(objVino);
            alert("primer vino cargado") 
            productosTotales = parseInt(cantidad);
        }
        colocarNumero = document.getElementById('prodCarrito').innerHTML = productosTotales;
        console.table(arregloCarrito);    
        console.log(productosTotales);    
        localStorage.setItem(usuarioActual, JSON.stringify(arregloCarrito));
}


function mostrarCarrito(tuCarrito){
    let tuCompra = document.getElementById("cuerpoCarrito");
    let sumaTotal =0;
    tuCompra.innerHTML=" "; 
    if (tuCarrito.length==0){
        tuCompra.innerHTML += `
        <div class="row">    
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h4> 
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">

        No tiene productos en el carrito
              <h4>
            </div>  
        </div>
        `    
    }else{
        for (i=0; i<tuCarrito.length; i++){
            let tuImagen = tuCarrito[i].foto;
            let tuNombre = tuCarrito[i].nombre;
            let tuPrecio = tuCarrito[i].precio;
            let tuCantidad = tuCarrito[i].unidades;
            let tuSubTotal = parseInt(tuPrecio) * parseInt(tuCantidad);
            sumaTotal += tuSubTotal;
            tuCompra.innerHTML += `

                <div class="row border">    
                    <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 tamanio">
                        <img class=mt-1 src="${tuImagen}" alt="alpiste">
                    </div>
                    <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 ">
                        <p><strong>${tuNombre}</strong></p>
                    </div>
                    <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 ">
                        <p><strong>${tuPrecio}</strong></p>
                    </div>
                    <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 ">
                        <p><strong>${tuCantidad}</strong></p>
                    </div>
                    <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 ">
                        <p><strong>${tuSubTotal}</strong></p>
                    </div>
                    <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <button id="botonEliminar${i}" onclick="borrarProducto(${i})"><img src="../assets/trash.svg" height ="50" width="50" /> </button>
                    </div>
                </div>    

            `
        }
        tuCompra.innerHTML += `
        <div class="row justify-content-center border">
            <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-3">
                <h3>Monto Total $${sumaTotal} <h3>
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-3">
                <button class="btn btn-danger botonesCarrito" id="finalizarCompra" onclick="finalizarCompra()">Finalizar Compra </button>
            </div>
        </div>
        <div class="row justify-content-center border">
            <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-3">
                <button class="btn btn-danger botonesCarrito" id="vaciarCarro" onclick="vaciarCarrito()">Vaciar Carrito </button>
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-3">
                <button class="btn btn-danger botonesCarrito" id="cerrarCarro" onclick="verCarro()">Cerrar </button>
            </div>
        </div>
        `
    }
}

// Comienzo toqueteo carro final 

const sidebar = document.querySelector(".sidebar")


// Fin toqueteo carro final 

//Comienzo de toqueteo carrito
//const sidebar = document.querySelector(".sidebar")  comentado para prueba
const fondoSidebar = document.querySelector(".fondoCarro")

function verCarro(){
    if(productosTotales === 0){
        alert ("No hay vinos en el carrito... es una excelente oportunidad de elegir el primero!")
    }else{
        sidebar.classList.toggle("active");
        mostrarCarrito(arregloCarrito);
    }
}

function borrarProducto(indice){
    let descontarProd = arregloCarrito[indice].unidades;
    productosTotales = parseInt(productosTotales) - parseInt(descontarProd); 
    localStorage.setItem('prodencarrito', JSON.stringify(productosTotales));
    arregloCarrito.splice(indice,1);
    if(productosTotales===0){
        sidebar.classList.toggle("active");
    }else{
        mostrarCarrito(arregloCarrito);
    }
    localStorage.setItem(usuarioActual, JSON.stringify(arregloCarrito));
    colocarNumero = document.getElementById('prodCarrito').innerHTML = productosTotales;
}

function vaciarCarrito(){
    arregloCarrito = [];
    localStorage.setItem(usuarioActual, JSON.stringify(arregloCarrito));
    productosTotales = 0;
    sidebar.classList.toggle("active");
    colocarNumero = document.getElementById('prodCarrito').innerHTML = productosTotales;
}
//Fin de toqueteo carrito


function cargaFormulario(){
   
        let operacion = document.getElementById("login");
        operacion.innerHTML =" "  //Borramos el contenido para no generar duplicados
    
    
        operacion.innerHTML += `

        <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 parte1y3 barricaIzq">
        
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 bg-secondary">
        <div class="registros">
            <form id="registro" class="formularioRegistro" action="#">
                <h5>Registro</h5>
                <input type="number" id="idDni" placeholder="DNI" name="dni" required>
                <input type="email" id="idEmail" placeholder="Email" name="email">
                <input type="text" id="idNombre" placeholder="Nombre" name="nombre">
                <input type="password" id="idContrasena" placeholder="Contraseña" name="contrasena" required>
                <input type="password" id="idContrasena2" placeholder=" Confirme Contraseña" name="contrasena" required>
                <button type="submit" class="btn btn-primary botonCrear">Registrar</button>
                <button type="button" class="btn btn-primary botonCrear" onclick="cerrarRegistro()">Cancelar</button>
            </form>
        </div>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 parte1y3">
            
        </div>  
    </div>
        `
        registrarUsuario();   
    //})
}


function cerrarRegistro(){
    let cerrar = document.getElementById("login")
    cerrar.innerHTML = "";
}

function registrarUsuario(){
    formularioNew = document.getElementById('registro');
    formularioNew.addEventListener('submit', (e) => {
        e.preventDefault();
        let dni = document.getElementById('idDni').value;
        let nombre = document.getElementById('idNombre').value;
        let email = document.getElementById('idEmail').value;
        let contrasena = document.getElementById('idContrasena').value;
        let contrasena2 = document.getElementById('idContrasena2').value;

        if(contrasena != contrasena2){
            alert("La contraseña y la confirmación son distintas")
        }
        else{
            if(!listadoClientes.some(usuarioEnArray => usuarioEnArray.dni == dni)){
                const unCliente = new Cliente(dni, nombre, email, contrasena)
                listadoClientes.push(unCliente)
                localStorage.setItem('usuarios', JSON.stringify(listadoClientes))


                formularioNew.reset();
                cerrarRegistro();
                Toastify({
                    text: "Usuario creado satisfactoriamente",
                    duration: 2500,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
            }else{
                Toastify({
                    text: "El DNI ingresado ya se encuentra registrado",
                    duration: 2500,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                    background: "linear-gradient(to right, #F98585, #FD0D0D)",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
            }
        }
    })    
}

function inOutCliente(){
    if (usuarioActual == "Invitado"){
        let ingreso = document.getElementById("login");
        ingreso.innerHTML =" "
        ingreso.innerHTML += `
        <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 parte1y3 barricaIzq">
            
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
                <div id="login" class="login">
                    <form id="inicioSesion" class="formularioLogin bg-secondary" action="#">
                        <h5>Ingreso</h5>
                        <input type="number" id="idDniAlta" placeholder="DNI" name="dni" required>
                        <input type="password" id="idContrasenaAlta" placeholder="Contraseña" name="contrasena" required>
                        <button type="submit">Iniciar</button>
                    </form>
                    <p>Aun no tenes usuario?</p>
                    <button class="botonRegistro" onclick="cargaFormulario()" id="registroCliente">Registrarse</button>
                    <button class="botonRegistro" type="button" onclick="cerrarRegistro()">Cancelar</button>
                </div>    
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 parte1y3">
                
            </div>  
        </div>
        `
    }
    inOutSesion();
}


function inOutSesion(){
    if(usuarioActual=="Invitado"){
        console.log("estas como invitado")
        formularioN = document.getElementById('inicioSesion');
        formularioN.addEventListener('submit', (e) => {
            e.preventDefault();
            let suDni = document.getElementById('idDniAlta').value;
            let suClave = document.getElementById('idContrasenaAlta').value;
    
            if((listadoClientes.some((usuariobuscado => usuariobuscado.dni == suDni) && (usuariobuscado => usuariobuscado.clave == suClave)))){
                usuarioActual = suDni;
                formularioN.reset();
                recuperarCarro(usuarioActual)
                colocarUsuario = document.getElementById("usuarioLogueado").innerHTML = usuarioActual;
                console.log("as")
                cambiarOpcion = document.getElementById("inOut").innerText = 'Salir';
                localStorage.setItem('usuarioIn',usuarioActual);
                cerrarRegistro();
            }
            else{
                alert("Registrate Pa")
            }
        })
    }else{
        cambiarOpcion = document.getElementById("inOut").innerText = 'Iniciar Sesion';
        deslogueo();
    }
}

function recuperarCarro(usuarioActual){
    arregloCarrito = (localStorage.getItem(usuarioActual)) ? JSON.parse(localStorage.getItem(usuarioActual)) : [];
    for(i=0; i<arregloCarrito.length; i++){
        productosTotales = parseInt(productosTotales) + parseInt(arregloCarrito[i].unidades);
    }
    colocarNumero = document.getElementById('prodCarrito').innerHTML = productosTotales;
}

function deslogueo(){
    localStorage.setItem(usuarioActual, JSON.stringify(arregloCarrito));
    arregloCarrito = [];
    usuarioActual = "Invitado"
    localStorage.setItem('usuarioIn',usuarioActual);
    document.getElementById("usuarioLogueado").innerHTML = usuarioActual;
    colocarNumero = document.getElementById('prodCarrito').innerHTML = 0;
    productosTotales =0;
}

function cargarUsuario(){
    let usuarioSalvado = localStorage.getItem('usuarioIn');
    usuarioActual = usuarioSalvado
    recuperarCarro(usuarioActual)
    colocarUsuario = document.getElementById("usuarioLogueado").innerHTML = usuarioActual;
}

document.getElementById("controlAcceso").style.opacity=0.2;

function mostrarSitio(){
    let crearControl = document.getElementById('validacionEmergente');
    crearControl.style.zIndex = 99;
    crearControl.style.width = '5px';
    crearControl.style.height = '5px';
    document.getElementById("controlAcceso").style.opacity=1;
    document.getElementById("validacionEmergente").style.opacity=0;
    accesoDenegado = document.getElementById("validacionEmergente").innerHTML = " ";
    noValidoAun = false;
    console.log(noValidoAun)
}

function cerrarSitio(){
    document.getElementById("validacionEmergente").style.opacity=0;
    elFondo = document.getElementById('controlAcceso').style.opacity=0.1;
    let accesoDenegado = document.getElementById("accesoDenegado");
    accesoDenegado.innerHTML = `
        <div class="bloqueo">
            <P>Oh No! Picolino, no podemos mostrar el sitio a menores..</P>
            <img src="./assets/controlAcceso.jpg" alt="AccesoDenegado">
            <button onclick="regresar()">He crecido y quiero regresar</button>
        </div>    
    `
}

function regresar(){
    accesoDenegado = document.getElementById("accesoDenegado").innerHTML = " ";
    window. location. reload();
}

/* Fin toqueteo Validación 18 */

function finalizarCompra(){
    alert('Gracias por su compra.' + 'Pedido #2645')
    vaciarCarrito();
}

function controlarAcceso(){
    
    if(noValidoAun){
        console.log(noValidoAun)
        let crearControl = document.getElementById("validacionEmergente");
        crearControl.innerHTML =""
        crearControl.innerHTML += `
        <p>Bienvenido, debes ser mayor de edad para visitar este sitio web</p>
        <button class="boton menor" onclick="cerrarSitio()">Tengo menos de 18 años</button>
        <button class="boton mayor" onclick="mostrarSitio()">Soy mayor de edad</button>
        `
    }
}

function suscribir(){
    limpiar = document.getElementById("suscripcionMail").innerText = " "

    
}