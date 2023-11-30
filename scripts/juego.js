const botonIz = document.getElementById("lButton");
const botonDch = document.getElementById("rButton");

const audioV = document.getElementById("sonidoVictoria");
let puertaAbierta = false;

const paredes = ["./images/pared1.jpg", "./images/pared2.jpg", "./images/pared3.jpg", "./images/pared4.jpg"];
const mapas = ["#imgmap1","#imgmap2","#imgmap3","#imgmap4"];
const pistas = [
    "Circ Circ Tria",//Cuadro ML
    "Cuad Cuad Cuad",//Cuadro Venus
    "Circ Tria Cuad",//Cuadro Noche
    "Cuad Cuad Circ",//Cuadro
    "Numeros: Estr Circ Cuad Tria",//Planta roja
    
    "Siempre OPERAR con COLORES",//Libros
    "Dale la vuelta a la hija de Urano",//Repisa ventana
    "La Mona pasa la Noche en la Persona de Venus",//Esquina cuadro
    "Acordarse de la FORMA de los NUMEROS",//Raja sofa
    "x",//Jarron (color rojo)
    "/",//Cortina (color morado)
    "+",//Pata oso (verde)
    "-",//Espejo (amarillo)
    "=",//Maceta (azul)
];


let currentImage = document.getElementById("pared").getAttribute("src");
let currentMap = document.getElementById("pared").getAttribute("usemap");

function clickDch (){
    let imagen = currentImage;
    let map = currentMap;
    let i = paredes.indexOf(imagen);
    if(imagen == paredes[i]){
        if (i < 3){
            imagen = paredes[i+1];
            map = mapas[i+1];
        }else{
            imagen = paredes[0];
            map = mapas[0];
        }
    }
    document.getElementById("pared").setAttribute("src", imagen);
    document.getElementById("pared").setAttribute("usemap", map);
    currentImage = imagen;
    currentMap = map;
    
}

function clickIzq (){
    let imagen = currentImage;
    let map = currentMap;
    let i = paredes.indexOf(imagen);
    if(imagen == paredes[i]){
        if (i > 0){
            imagen = paredes[i-1];
            map = mapas[i-1];
        }else{
            imagen = paredes[3];
            map = mapas[3];
        }
    }
    document.getElementById("pared").setAttribute("src",imagen);
    document.getElementById("pared").setAttribute("usemap", map);
    currentImage = imagen;
    currentMap = map;
    
}

let ventanitaReference;
//https://developer.mozilla.org/es/docs/Web/API/Window/open
function openVentanita(num) {
    let direccion = "./nota"+num+".html";
    window.open(
    direccion,
    "Nota",
    "centerscreen=yes, chrome=yes, height=420px, width=550px, top=400px, left=2000px",
  );
  ventanitaReference.onload = mostrarPista(num);
}

let ventanitaOsoReference;
function openVentanitaOso() {
    window.open(
    "./nota15.html",
    "Nota",
  );
  ventanitaReference.onload = mostrarPista(num);
}

let ventanitaQuemadaReference;
function openVentanitaQ() {
  ventanitaQuemadaReference = window.open(
    "./notaquemada.html",
    "Nota Quemada",
    "centerscreen=yes, chrome=yes, height=380px, width=550px, top=400px, left=2000px",
  );
}

let tecladoReference;
function openTeclado() {
    document.getElementById("pagTeclado").style.display = "block";
}

function cerrarTeclado(){
    document.getElementById("pagTeclado").style.display = "none";
}


function openVictoria() {
    window.open("victoria.html","_self");
}

function pulsarBoton(id){
    if (document.getElementById("inputTexto").value.length < 4){
        document.getElementById("inputTexto").value = document.getElementById("inputTexto").value + document.getElementById(id).value;
    }    
}


function validarCodigo(){
    if (document.getElementById("inputTexto").value == "8779"){
        puertaAbierta = true;
        reproducirSonidoVictoria();
    }else{
        window.alert("Código incorrecto");
    }
    document.getElementById("inputTexto").value = "";
}

function intentarAbrir(){
    if (puertaAbierta){
        openVictoria();
        reproducirSonidoVictoria();
    }else if(!puertaAbierta){
        window.alert("Está cerrada. No puedes salir")
    }
}

function reproducirSonidoVictoria() {
    audioV.setAttribute("src", "./images/exito.mp3");
    audioV.play();
    console.log(`Reproduciendo: ${audioV.src}`)
}