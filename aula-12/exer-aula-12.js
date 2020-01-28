let idade = 67;
if (idade < 16){
    console.log('Que pena, você ainda não pode votar. Mas falta pouco.');
} else if (idade < 18 || idade >= 67){
    console.log('Voto opcional.');
} else {
    console.log('Você obrigatório!')
};