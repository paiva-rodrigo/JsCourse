function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'Manha.PNG'
        document.body.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora < 18){
        //Boa Tarde
        img.src = 'Tarde.PNG'
        document.body.style.background = "#9846f"

    }else{
        //Boa Noite
        img.src = 'Noite.PNG'
        document.body.style.background = "#515154"

    }

}
