var cuadrito = document.getElementById("area_de_dibujo");
var alto = document.getElementById("altoHoja");
var ancho = document.getElementById("anchoHoja");
var boton = document.getElementById("botonOk");
var color = document.getElementById("colorPincel");
var grosor = document.getElementById("grosorPincel");
var borrar = document.getElementById("borrarDibujo");
var papel = cuadrito.getContext("2d");
var click = false;
var xi = 0;
var yi = 0;


document.addEventListener("mousedown", inicioLinea);
document.addEventListener("mousemove", trazarLinea);
document.addEventListener("mouseup", finLinea);
boton.addEventListener("click", medidasHoja);
borrar.addEventListener("click", borrarHoja);

function medidasHoja()

{
    cuadrito.width = parseInt(ancho.value);
    cuadrito.height = parseInt(alto.value);
    var anchoH = cuadrito.width
    var altoH = cuadrito.height
}

function borrarHoja()
{
    papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
    location.reload();
}

function dibujarLinea(color, grosor, xinicial, yinicial, xfinal, yfinal)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = grosor;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
}

function inicioLinea(evento)
{
    xi = evento.layerX;
    yi = evento.layerY;
    click = true;
}

function trazarLinea(evento)
{
    if (click == true)
    {
        dibujarLinea(color.value, grosor.value, xi, yi, evento.layerX, evento.layerY);
        xi = evento.layerX;
        yi = evento.layerY;
    }
}

function finLinea(evento)
{
    click = false;
}
