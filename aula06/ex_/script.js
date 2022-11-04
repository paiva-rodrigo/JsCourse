function Contar(){
    let dados =document.getElementById('dados')
    let res=document.getElementById('res')

    let numIni = document.getElementById('NumIni')
    let numFin = document.getElementById('NumFin')
    let numPass = document.getElementById('NumPass')

    numIni = Number(numIni.value)
    numFin = Number(numFin.value)
    numPass = Number(numPass.value)

    for (let c = numIni; c<numFin; numIni+numPass){
        res.innerHTML += `${numIni} => `
    }  
        
    }

