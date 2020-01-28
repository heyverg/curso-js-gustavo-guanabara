function analisar () {
    let num = document.getElementById('txtNum');
    let resSel = document.getElementById('txtSel');
    if (num.value.length == '') {
        window.alert('Por favor, adicione um número.');
    }   else {
            let n = Number(num.value);
            let item = document.createElement('option'); // Cria elemento
            item.text = `Valor digitado foi ${n}.`;
            resSel.appendChild(item);
        };
}