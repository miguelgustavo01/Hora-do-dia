function carregar(){
    var msg= window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var  data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
   
    
    msg.innerHTML= (`Agora são ${hora}:${minuto}h`)

    if(hora >=0 && hora<6){
        //b madruga
        img.src='img/madrugada.png'
        document.body.style.background= 'orange'
        
    }
    else if(hora< 12){
        //b dia
        img.src='img/dia.png'
        document.body.style.background= '#3333'
    }
    else if(hora<=18){
        //b tarde
        img.src='img/tarde.png'
        document.body.style.background= 'blue'
    }
    else{
        //b noite
        img.src='img/noite.png'
        document.body.style.background= '#333'
    }
}

