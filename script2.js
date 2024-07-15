
  
const array = ['Serie', 'Serie', 'Paralelo', 'Paralelo']
let valor = [8,5,3,6]
let suma=0
let array2 = [
    []
]
//43 73
for(let i = 0; i<array.length; i++){
    if(array[i]=='Serie'){
        suma+=valor[i]
    }
    else{
        array2[0].push(suma)
        suma=0
        
        for(let j = i; j < array.length; j++){
            console.log(valor[j])
            if(array[j]=='Serie'){
                suma+=valor[j]
            }
            
        }
        array2.push([suma])
        break;
    }
    
}
console.log(parseInt(array2[0]))
console.log(parseInt(array2[1]))
console.log(array2)
suma=(parseInt(array2[0])*parseInt(array2[1]))/(parseInt(array2[0])+parseInt(array2[1]))
console.log("La suma es :" + suma)