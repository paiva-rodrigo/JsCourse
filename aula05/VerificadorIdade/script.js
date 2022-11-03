function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'images/hom-c.PNG')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>0 && idade<10){
                //Criança
                img.setAttribute('src', 'images/hom-c.PNG')

            }else if(idade >= 21 && idade<60){
                //jovem//adulto
                img.setAttribute('src', 'images/hom-j.PNG')
            }else{
                //velho 
                img.setAttribute('src', 'images/hom-v.PNG')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>0 && idade<10){
                //Criança
                img.setAttribute('src', 'images/mul-c.PNG')

            }else if(idade >= 21 && idade<60){
                //jovem//adulto
                img.setAttribute('src', 'images/mul-j.PNG')
            }else{
                //velho 
                img.setAttribute('src', 'images/mul-v.PNG')
            }
        }
       
        res.style.textAlign = 'center'
        res.innerHTML = `Idade Calculada: ${idade} anos, ${genero} `
        res.appendChild(img)
        
    }
}
