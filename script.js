let array= [
   []
    
]
console.log(array.length)

let array2 = ["Serie","Serie", "Serie", "Paralelo","Serie"]
for(let i=0; i < array2.length; i++){
    
    if(array2[i]!="Paralelo"&&array[array.length-1].length<5){
       
            array[array.length-1].push("Serie")
        }
    
    
    if(array2[i]=="Paralelo"){
        array.push([]) 
    }
    
}


console.log(array)
console.log(array.length)