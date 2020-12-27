//Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo).

function clacificasao_do_triangulos(l1,l2,l3){
    if(l1==l2==l3){
        return console.log(' o seu triangulo é um equilatero', l1,l2,l3)
    }
    if(l1==l2 || l2==l1 || l1==l3 || l3==l1 || l2==l3 || l3==l2){
        return console.log(' o seu triangulo é um isosceles', l1,l2,l3)

    }
    if(l1 != l2 != l3){
        return console.log(' o seu triangulo é um escaleno', l1,l2,l3)

    }
    else{
        console.log("operação invalida!!")
    }
}
clacificasao_do_triangulos(1,1,1)

clacificasao_do_triangulos(3,3,2)

clacificasao_do_triangulos(1,2,3)

