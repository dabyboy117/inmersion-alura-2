let listaNombresGastos = [];
let listaValoresGastos = [];
//Esta funcion se invoca al momento de que el usuario hace clic en el 
//button
 function clickBoton() {
    let nombreGastos = document.getElementById('nombreGasto').value;
    let valorGastos = document.getElementById('valorGasto').value;

    console.log(nombreGastos);
    console.log(valorGastos);

    listaNombresGastos.push(nombreGastos);
    listaValoresGastos.push(valorGastos);


    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert('Click de usuario')
    actualizarListaGastos();
 }

  function actualizarListaGastos() {
    const listaElementos = document.getElementById('ListaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista ='';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
      const valorGasto = Number (listaValoresGastos[posicion]);

         htmlLista +=`<li>${elemento} - USD ${valorGasto.toFixed(2)}
                      <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                  </li>`;
        //Calculamos el total de gastos
        totalGastos += Number (valorGasto);
        
    })
   
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2); 
    limpiar();
  }
 
  function limpiar() {
    document.getElementById('nombreGasto').value ='';
     document.getElementById('valorGasto').value ='';
  }

  function eliminarGasto(posicion) {
    
     listaNombresGastos.splice (posicion, 1);
     listaValoresGastos.slice (posicion, 1);
     actualizarListaGastos();
  }