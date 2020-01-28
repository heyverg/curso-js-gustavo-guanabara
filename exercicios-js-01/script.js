function carregar(){
    let titulo = window.document.getElementById('title');
    let imagem = window.document.getElementById('img');
    let data = new Date();
    let hora = data.getHours();


    titulo.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        imagem.src = 'manha.png';
        document.body.style.background = 'linear-gradient(90deg, rgba(202,216,233,1) 12%, rgba(37,88,240,1) 39%, rgba(56,86,250,1) 81%)';

    } else if (hora >= 12 && hora <= 18){
        imagem.src = 'tarde.png'
        document.body.style.background = 'linear-gradient(90deg, rgba(233,211,202,1) 12%, rgba(232,89,6,1) 39%, rgba(220,236,22,1) 81%)';

    } else {    
        imagem.src = 'noite.png'
        document.body.style.background = 'linear-gradient(90deg, rgba(2,15,111,1) 41%, rgba(150,6,232,1) 66%, rgba(1,6,48,1) 95%)';

    }
}