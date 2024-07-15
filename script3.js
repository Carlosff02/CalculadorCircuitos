let array= [
    []
     
 ]
 let suma =0
let arregloSuma=[
    []
]
let paralelo = 0
 //console.log(array.length)
 
 let array2 = ["Serie","Serie", "Serie", "Paralelo","Paralelo","Paralelo","Serie"]
 let array3 = [8,5,3,6,6,7,7]
 let array4=[]
 for(let i=0; i < array2.length; i++){
     
     if(array2[i]!="Paralelo"&&array[array.length-1].length<5){
        
             array[array.length-1].push(array3[i])
         }
     
     
     if(array2[i]=="Paralelo"){
         array.push([array3[i]]) 
     }
     
 }
 

 /*var numeroRestringido = 0
 for(let i =array.length-1; i >=0; i--){
    
    suma=0
    
   
    for(let j=array[i].length-1; j>=0;j--){
        
       
        if(i>0&&j==0){
            //console.log(array[i].length)
            //console.log(`hola${array[i-1][array[i-1].length-1]}`)
            
            suma=array[i][j]
            numeroRestringido = array[i-1][array[i-1].length-1]
            suma=(array[i-1][array[i-1].length-1]*(suma))/(array[i-1][array[i-1].length-1]+(suma))
            /*for(let k=0;k<array.length;k++){
                for(let h = 0; h< array[k].length;h++){
                    if(array[k][h]==paralelo){
                        array[k][h]=[suma]
                    }
                }
                
            }
           if(i>0){
            array.length-=1
            array[1]=[suma]
        }
        /*else{
            array[i+1]=[suma]
        }
            
           
            //console.log("suma " + array[i-1])
            //console.log("restringido " + numeroRestringido)
            
        }
        else if(array[i][j]!=array[i][array[i].length-1||array[i][j]==array[array.length-1][array[array.length-1].length-1]]){
            console.log("suma : ")
            console.log(array[array.length-1][array[array.length-1].length-1])
            suma+=array[i][j]
            
        }
        
        
    }
    array[i]=[suma]
    console.log(i + " : ")
    console.log(array[i])
    array4.push(suma)
    
 }*/
 
 console.log(suma)
 console.log(array)
 console.log(array4)
 let calculo=0;
 /*for(let i=array4.length-1;i>=array4.length-2;i--){
        console.log(i + " : " + array4[i])    
        calculo += array4[i]
    
    
 }
 console.log(calculo)
 //console.log(array.length)*/