function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    let n = Number(num.value)
    if(num==0){
        alert(`Valor nulo no campo`)
    }else{
        let n = Number(num.value)
        let c=1
        tab.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
    
}
