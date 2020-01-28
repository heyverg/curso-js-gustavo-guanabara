function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.getElementById('txtAno');
    let res = document.querySelector('div#res');

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('Erro, verifique os dados novamente!');

    } else {
        let fsex = window.document.getElementsByName('radSex');
        let idade = ano - Number(fAno.value);
        let gen = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem';
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'babyBoy.png');
            } else if (idade < 18) {
                // Jovem
                img.setAttribute('src', 'youngBoy.png');
            } else if (idade < 62) {
                // Adulto
                img.setAttribute('src', 'adultMan.png');
            } else {
                // Idoso
                img.setAttribute('src', 'oldMan.png');
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher';
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'babyGirl.png');
            } else if (idade < 18) {
                // Jovem
                img.setAttribute('src', 'youngGirl.png');
            } else if (idade < 62) {
                // Adulto
                img.setAttribute('src', 'adultWoman.png');
            } else {
                // Idoso
                img.setAttribute('src', 'oldWoman.png');
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Você é ${gen} e tem ${idade} anos de idade.`;
        res.appendChild(img);
    }
}