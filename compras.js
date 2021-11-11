
const monto = document.getElementById("montoTotal")

const categoria = document.getElementById("tipo-categoria")

const entradas =document.getElementById("numero-entradas")





function resultadoCompra(){
    


     if ( entradas.value > 0   &&   categoria.value ==1 ) {

        monto.textContent = entradas.value * (200*0.2);


     }else if ( entradas.value > 0 &&  categoria.value ==2 ) {
          monto.textContent = entradas.value * (200*0.5);


     } else if  ( entradas.value > 0  &&  categoria.value == 3) {
          monto.textContent = entradas.value * (200*0.85);

     } else { 

          alert(`Oops! algo salio mal, asegurate de haber seleccionado la cantidad y la categoria `);
     }
     
}



function borraMontoTotal (){
 monto.textContent = "";

}