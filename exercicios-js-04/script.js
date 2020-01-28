function calcular() {
    let vI = document.getElementById('valInicial');
    let res = document.getElementById('result');

    if (vI.value.length == ''){
        window.alert('[ERRO] - Campo em branco.');
    } else {
        res.innerHTML = 'Resultado: <br><br>';
        let vIni = Number(vI.value);

            for (i = 0; i <= 10; i++) {
            res.innerHTML += `${vIni} X ${i} = ${vIni*i}<br>`;
            }
        } 
        res.innerHTML += '<br> Fim! \u{1F3C1}';    
    };
