import Sketch from "react-p5";
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react'
function Circuit(props) {
  
  const setup = (p5, parentRed) => {
    p5.createCanvas(1280, 720).parent(parentRed);
  };
  const [array , setArray] = useState([[]]) 
  useEffect(() => {
    const newArray = [[]];

    // Lógica para construir newArray basado en props.opcion
    for (let i = 0; i < props.opcion.length; i++) {
      if (props.opcion[i] !== "Paralelo" && newArray[newArray.length - 1].length < 5) {
        newArray[newArray.length - 1].push("Serie");
        
      }

      if (props.opcion[i] === "Paralelo") {
        newArray.push(["Serie"]);
      }
    }

    // Actualizar el estado de array con el nuevo valor de newArray
    setArray(newArray);
    
  }, [props.opcion]);
  let arregloSerie = props.opcion.filter(serie => serie == "Serie")
  let arregloParalelo = props.opcion.filter(paralelo => paralelo == "Paralelo")
  
  const draw = (p5) => {
    let clicks = Math.min(props.click, 5);
    p5.clear()
    let cuadrado1Inicial = 50; //50
    let cuadrado1Final = 50;
    let cuadrado2Inicial = 300; //400
    let cuadrado2Final = 300; 
    let cuadrado3Inicial = 2; //2
    let cuadrado3Final = 2;
    let incCuadrado=1
    
    if (clicks > 2) {
      incCuadrado += (20 * Math.min(clicks, 3));
    }
    let cuadrado = [
      //[cuadrado1Inicial, cuadrado3Inicial, cuadrado1Final, cuadrado2Final + (incCuadrado * clicks)],
      [cuadrado1Inicial, cuadrado3Inicial, cuadrado2Final, cuadrado3Final],
      //[cuadrado2Inicial, cuadrado3Inicial, cuadrado2Final, cuadrado2Final + (incCuadrado * clicks)],
      [cuadrado2Inicial, cuadrado2Inicial + (incCuadrado * clicks), cuadrado1Final, cuadrado2Final + (incCuadrado * clicks)],
    ];
    
    if(clicks==0){
      p5.line(cuadrado2Inicial, cuadrado3Inicial, cuadrado2Final, cuadrado2Final + (incCuadrado * clicks))
    }
    
    let x1Inicial = cuadrado2Inicial + 10; //410
    let x2Inicial = cuadrado2Inicial - 10; //390
    let x1 = x1Inicial;
    let x2 = x2Inicial;
    let y1Inicial = 50;
    let y2Inicial = 60;
    let y1 = y1Inicial;
    let y2 = y2Inicial;
    let incremento = 10;
    let acumulacion = 0;
    let save;
    
    

    
      
      for (let x = 0; x < 2; x++) {
        for (let k = 0; k < 5; k++) {
          
          p5.line(
            cuadrado[x][k],
            cuadrado[x][k + 1],
            cuadrado[x][k + 2],
            cuadrado[x][k + 3]
          );
        }
      }
    
    
      p5.line(20, cuadrado2Inicial/2, 80, cuadrado2Inicial/2);
      p5.line(40, (cuadrado2Inicial/2)+10, 60, (cuadrado2Inicial/2)+10);
      p5.line(cuadrado1Inicial, cuadrado3Inicial, cuadrado1Final, cuadrado2Inicial/2)
      p5.line(cuadrado1Inicial, (cuadrado2Inicial/2)+10, cuadrado1Final, cuadrado2Final + (incCuadrado * clicks))
      /*p5.line(50, 2, 50, 400); //izquierda
      p5.line(50, 2, 400, 2); //arriba
      p5.line(400, 2, 400, 400); //derecha
      p5.line(400, 400, 50, 400); //abajo*/
      var salva2 = []
      var salva3 = []
      var salvaY1=y1Inicial
      var salvaY2=y2Inicial
      let incrementoX=0
      for(let h=0;h<array.length;h++){
        if(h>0){
          y1=salvaY1
          y2=salvaY2
          y1Inicial=salvaY1
          y2Inicial=salvaY2
          salva3=[]
          salva2=[]
        }
        incrementoX=h*100
      for (let i = 0; i < array[h].length; i++) {
        let variable
        
        for (let j = 1; j <= 9; j++) {
          
          if (j == 1) {
            p5.line(300+incrementoX,2,300+incrementoX,40)
            p5.line(x1 - 10+incrementoX, y1Inicial - 10, x1+incrementoX, y2Inicial - 10);
           
            if(i>0){
              salva2.push(y1Inicial-10)
              //console.log("salva2 : " + salva2)
              
            }
            for(let k = 0; k<= clicks; k++){
              p5.line(300+incrementoX,salva3[k],300+incrementoX,salva2[k])
            }
            
          } else if (j == 9) {
            p5.line(
              x2Inicial+incrementoX,
              y1Inicial + acumulacion * incremento,
              x2Inicial + 10+incrementoX,
              y2Inicial + acumulacion * incremento
            );
            if(clicks>1){
              salva3.push(y2Inicial + acumulacion * incremento)
              //console.log("salva3 : " + salva3)
            }
            
            if(i==array[h].length-1){
              
              variable=y2Inicial + acumulacion * incremento
              p5.line(300+incrementoX,variable,300+incrementoX,cuadrado2Final + (incCuadrado * clicks))
            }//if(i==array.length-1){
              p5.line(300+incrementoX,cuadrado2Final + (incCuadrado * clicks),300,cuadrado2Final + (incCuadrado * clicks))
              p5.line(300+incrementoX,2,300,2)
            //}
          } else {
            p5.line(x1+incrementoX, y1, x2+incrementoX, y2);
          
            save = x1;
            x1 = x2;
            x2 = save;
            
            y1 += incremento;
            y2 += incremento;
            acumulacion++;
          }
        }
        y2Inicial = y2Inicial + 110;
        y1Inicial = y1Inicial + 110;
        y1 = y1Inicial;
        y2 = y2Inicial;
        x1 = x1Inicial;
        x2 = x2Inicial;
        
        acumulacion = 0;
        
        
      }
    }
      
      
    
      /*p5.line(400,20,410,30)
    p5.line(410,30,390,40)
    p5.line(390,40,410,50)
    p5.line(410,50,390,60)
    p5.line(390,60,410,70)
    p5.line(410,70,390,80)
    p5.line(390,80,410,90)
    p5.line(410,90,390,100)
    p5.line(390,100,400,110)*/
    
  };
  
  return <Sketch setup={setup} draw={draw} />;
}

  

 


Circuit.propTypes = {
  click: PropTypes.number.isRequired
};
export default Circuit;