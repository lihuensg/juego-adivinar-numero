let numeroAzar = Math.floor(Math.random()*100) + 1;     //Math.floor -> redondea hacia abajo. //Math.randon -> devuelve num entre [0..1]

let numeroEntrada =  document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intentos =  document.getElementById("intento");
let contador = 0;


function chequearResultado(){   // Btn comprobar
 let numeroIngresado = parseInt(numeroEntrada.value);
    contador ++;
    intentos.textContent = contador;

 if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Burro!! ;D";
    mensaje.style.color = 'yellow';
   return
 }  

 if (numeroIngresado == numeroAzar) {
    mensaje.innerHTML = "¡Felicidades has ganado! :D<br>Con un total de " + contador + " intentos";
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true; // Desactivar el campo de entrada
 } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = "Más alto! El número es mayor al que dijiste" ;
    mensaje.style.color = 'red';
 } else if (numeroIngresado > numeroAzar) {
    mensaje.textContent = "Más bajo! El número es menor al que dijiste"
    mensaje.style.color = 'blue';
 }

}

