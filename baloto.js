const inicio = document.getElementById('iniciar');
const reinicio = document.getElementById('reinicio');
const seccion = document.getElementById('juego');

inicio.addEventListener('click', () =>{
    //buscar los nuevos numeros
   let arreglo = [];
   arreglo = buscarDigitos();
   console.log(arreglo);

   // vaciar DOM
    seccion.innerHTML = "";
   // crear el nuevo section
   arreglo.forEach(numero =>{

    let bola = document.createElement('div');
    bola.className = 'bola';
    bola.innerHTML = `<h1>${numero}</h1>`;

    seccion.appendChild(bola);
   });
       //cambio de valores de cada boton

    reinicio.disabled = false;
    inicio.disabled = true;
});

//reiniciar Valores del DOM
reinicio.addEventListener('click', () =>{
    let arreglo = ['B', 'A', 'L', 'O', 'T', 'O'];
    seccion.innerHTML = '';
    arreglo.forEach(letra =>{

        let bola = document.createElement('div');
        bola.className = 'bola';
        bola.innerHTML = `<h1>${letra}</h1>`;
    
        seccion.appendChild(bola);
       });
    
       //cambio de valores de cada boton
        reinicio.disabled = true;
        inicio.disabled = false;

})

//crear los digitos de las bolas del juego 
function buscarDigitos(){
    let arreglo = [];
    for (let i = 0; i < 6; i++) {
        let numero = Math.random()* 100;
        arreglo.push(Math.floor(numero));
    }
    return arreglo;
}