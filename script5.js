let arreglo= [
    []
     
 ]
 let excluidos = [];
let array2 = ["Serie","Serie", "Serie", "Paralelo","Serie","Paralelo","Paralelo"]
 let array3 = [55,50,340,600,1800,1400,900]
for(let i=0; i < array2.length; i++){
     
    if(array2[i]!="Paralelo"&&arreglo[arreglo.length-1].length<5){
       
            arreglo[arreglo.length-1].push(array3[i])
        }
    
    
    if(array2[i]=="Paralelo"){
        arreglo.push([array3[i]]) 
    }
    
}
let arregloSumado = arreglo.map((subArray, index) => {
    if (index < arreglo.length - 1) {
      // Excluir el último elemento y guardarlo en el arreglo de excluidos
      let excluido = subArray.pop();
      excluidos.push(excluido);
      
    }
  
    // Sumar los elementos restantes
    let suma = subArray.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return [suma];
  });
  
  let calculo = parseInt(arregloSumado[arregloSumado.length-1])
  console.log(calculo)
  if(arreglo.length>0){
      for(let i = arregloSumado.length-1; i>=1;i-- ){
          //calculo= (calculo*parseInt(excluidos[excluidos.length-1]))/(calculo+parseInt(excluidos[excluidos.length-1]))
          if(excluidos.length==1){
              calculo= (calculo*parseInt(excluidos[excluidos.length-1]))/(calculo+parseInt(excluidos[excluidos.length-1]))
          }
          else{
          calculo= 1/((1/calculo)+(1/parseInt(excluidos[excluidos.length-1])))
      }
          excluidos.length--
          
         
          console.log("calculoInicial : " + calculo)
          calculo+=parseInt(arregloSumado[i-1])
          console.log("calculoInicial2 : " + calculo)
          if(excluidos.length==0){
              break;
          }
      }
  }
console.log(arreglo)
console.log("La resistencia es de:", calculo, "Ohmnios")