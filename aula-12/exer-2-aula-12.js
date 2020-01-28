let agora = new Date();
let hora = agora.getHours() + ':' + agora.getMinutes();

if (hora < 12){
    console.log(`São ${hora} horas. Bom dia pra você!`);
} else if (hora < 19){
        console.log(`São ${hora} horas. Boa tarde pra você!`);
    }
    else {
        console.log(`São ${hora} horas. Boa noite pra você!`);
    }