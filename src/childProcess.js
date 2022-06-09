console.log('SOY EL HIJO')
let getRandoms=(data)=>{
    if(data==0){
        //generar 100.000.000 numeros
        let objeto={}
        for (let j=0;j<=100000000;j++){
            let random=(Math.floor(Math.random()*(100-1) + 1)) 
            if(objeto[random]){
                objeto[random]++
            }else{
                objeto[random]=1
            }
        }
        return objeto
    }else{
        //calcular un cantidad de números aleatorios en el rango del 1 al 1000 especificada por parámetros de consulta (query).
        //El dato devuelto al frontend será un objeto que contendrá como claves los números random generados junto a la cantidad 
        //de veces que salió cada uno
        let objeto={}
        for (let j=0;j<=data;j++){
            let random=(Math.floor(Math.random()*(100-1) + 1)) 
            if(objeto[random]){
                objeto[random]++
            }else{
                objeto[random]=1
            }
        }
        return objeto
    }
    
}

process.on('message',data=>{
    console.log('child--->',data)
    process.send({res:getRandoms(data)})
})