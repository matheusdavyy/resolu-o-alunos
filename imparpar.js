const QuantidadeDeAlunos = "11";

for (let index=0; index <= QuantidadeDeAlunos; index ++){
    if (index == 0) {
        console.log('O número é zero');
    }else if(index%2 === 0){
        console.log('Onúmero é par' + index);
    }else {
        console.log('O número é impar' +index);
    }
}
