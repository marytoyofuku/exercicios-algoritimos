/*  
  function exerc_01_seq_cond() {
    //Construa um algoritmo que, tendo como dados de entrada dois pontos quaisquer no plano, P(x1,y1) e P(x2,y2), escreva a distância entre eles.
    var x1 = 1
    var y1 = 1
    var x2 = 2
    var y2 = 1
    var d = Math.pow(Math.pow(x2 - x1,2) + Math.pow(y2 - y1, 2), 1/2)
    console.log (d)
  }
  exerc_01_seq_cond()

*/


/*  
  function exerc_02_seq_cond() {
    //Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.
    var input = require("readline-sync") 
    var anoNasc = input.question('Digite ano de nascimento: ')
    var mesNasc = input.question('Digite mês de nascimento com dois dígitos: ')
    var diaNasc = input.question('Digite dia de nascimento com dois dígitos: ')
    var dataNasc = new Date(parseInt(anoNasc), parseInt(mesNasc),parseInt(diaNasc))
    

    var umDia= 1000*60*60*24
    
    var data = new Date()
    var dataHoje = Date.now()

    var diaAtual = data.getDate() 
    var mes = data.getMonth()    
    var ano = data.getUTCFullYear()    
    var diaHoje = diaAtual + "/" + mes + "/" + ano
 

    var idadeDias = (dataHoje-dataNasc)/umDia
    console.log(` Você nasceu em ${diaNasc+"/"+mesNasc+"/"+anoNasc } \n O dia de hoje é ${diaHoje} \n Então a quantidade de dias vividos é  ${parseInt(idadeDias)}`)
  }
  exerc_02_seq_cond()

*/


/*exerc_03_seq_cond
    //Faça um algoritmo que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias.

    var input = require("readline-sync") 
    var diasVividos = input.question(' Digite quantos dias você viveu até hoje: ')     
    var anos = parseInt(diasVividos/365)
    console.log(` Você viveu ${anos} anos!`)   
    var mes = parseInt(anos % 365/30)
    console.log(` Você viveu ${mes} meses!`)*/     
   

/*exerc_04_seq_cond
    //Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos.
    
    const readLineSync = require("readline-sync") 
    var resposta = readLineSync.question("Digite em segundos o tempo de duração do evento: ")   
    var hora = parseInt(resposta) / 3600
    var min = parseInt(resposta) % 3600/60
    var seg = parseInt(resposta) % 60
    console.log(` O tempo do evento dura ${parseInt(hora)} horas ${parseInt(min)} minutos ${seg} segundos! `)*/  


  /*exerc_05_seq_cond
    Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito. (use o comando caso-de e não faça repetições)
    Saldo médio     Percentual
    de 0 a 200          nenhum crédito
    de 201 a 400        20% do valor do saldo médio
    de 401 a 600        30% do valor do saldo médio
    acima de 601        40% do valor do saldo médio
function creditoEspecial() {
    const readLineSync = require("readline-sync") 
    var resposta = readLineSync.question("Digite o valor do saldo médio: ")  
    var saldoMedio = parseInt(resposta)

    if (saldoMedio  === 0 || saldoMedio <=200 ) {
     console.log(0)
    }
    else if (saldoMedio >= 201 || saldoMedio <= 400) {
      console.log(parseInt(saldoMedio)*0.2)
    }
    else if (saldoMedio >= 401 || saldoMedio <= 600){
      console.log(parseInt(saldoMedio)*0.3)
    }
    else if (saldoMedio > 601) {
      console.log(parseInt(saldoMedio)*0.4)
    }
  }  
  creditoEspecial()*/

 
  /*exerc_06_seq_cond
    Um vendedor precisa de um algoritmo que calcule o preço total devido por um cliente. O algoritmo deve receber o código de um produto e a quantidade comprada e calcular o preço total, usando a tabela abaixo. Mostre uma mensagem no caso de código inválido.
    Código        Preço unitário
    'ABCD'        R$ 5,30
    'XYPK'        R$ 6,00
    'KLMP'        R$ 3,20
    'QRST'        R$ 2,50
    function calculePreco () {
    const readLineSync = require("readline-sync") 
    var codigo = readLineSync.question("Digite o código em maiúsculas: ")       
    var quantidade = readLineSync.question("Digite quantidade comprada: ")

    var preco = [5.30,6,3.20,2.50]
    switch (codigo) {
    case 'ABCD':
      console.log(parseInt(quantidade)*preco[0])
    break
    case 'XYPK':
      console.log(parseInt(quantidade)*preco[1])
    break
    case 'KLMP':
      console.log(parseInt(quantidade)*preco[2])
    break
    case "QRST":
      console.log(parseInt(quantidade)*preco[3])
    break
    default:
      console.log('Código inválido!')
    break
    } 
    } calculePreco()*/


    /*exerc_07_seq_cond
    Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça um algoritmo que leia o salário e o cargo de um funcionário e calcule o novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo salário e a diferença.
    Código   Cargo        Percentual       
    101     Gerente       10%       
    102     Engenheiro    20%        
    103     Técnico       30%
    */
    
    /*function aumentoSalario() {
    const readLineSync = require("readline-sync") 
    var salario = readLineSync.question("Digite o valor do salário: ")
    var cargo = readLineSync.question("Digite o cargo em minúsculas: ")    

    switch(cargo) {
      case 'gerente':               
        console.log(` A diferença no seu salário é de: ${parseInt(salario)*0.1}  `)
        console.log(` Portanto seu salário atual é de: ${parseInt(salario)+parseInt(salario)*0.1}`)
      break
      case 'engenheiro':
        console.log(` A diferença no seu salário é de: ${parseInt(salario)*0.2}  `)
        console.log(` Portanto seu salário atual é de: ${parseInt(salario)+parseInt(salario)*0.2}`)        
      break
      case 'tecnico':
        console.log(` A diferença no seu salário é de: ${parseInt(salario)*0.3}  `)
        console.log(` Portanto seu salário atual é de: ${parseInt(salario)+parseInt(salario)*0.3}`)        
      break
      default:
        console.log(` A diferença no seu salário é de: ${parseInt(salario)*0.4}  `)
        console.log(` Portanto seu salário atual é de: ${parseInt(salario)+parseInt(salario)*0.4}`)        
      break              
    }    
    }
    aumentoSalario()*/


    /*exerc_01_comandos_repeticao
      A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
      a) média do salário da população;
      b) média do número de filhos;
      function prefeitura() {
      var habitantes = [[salario], [filhos]]
      var i = 0

      while(i<salario.length){
        somaSalarios = salario[i]
      }

      var totalHab = habitantes.length
      mediaSalarios = somaSalarios/totalHab
  
      var filhos = filhos.length
      var idadeFilhos = somafilhos
      for (var i=0; i<idadeFilhos.lenght; i++){
        soma += idadeFilhos[i]
      }
      var media = idadeFilhos[i]/filhos
      }*/

   /*exerc_02_comandos_repeticao
   //Chico tem 1,50 metro e cresce 2 centímetros por ano, enquanto Zé tem 1,10 metro e cresce 3 centímetros por ano. Construa um algoritmo que calcule e imprima quantos anos serão necessários para que Zé seja maior que Chico.

        function zeMaiorQueChico() {
        var tChico = 150
        var tZe = 110
        var anos = 0
        while (tZe<=tChico) {
          tChico +=2
          tZe +=3
          anos ++
          console.log(anos)
        }
      }
      zeMaiorQueChico()*/

//exerc_03_comandos_repeticao
//Construir um algoritmo que calcule a média aritmética de vários valores inteiros positivos, lidos externamente. O final da leitura acontecerá quando for lido um valor negativo.
/*const readLineSync = require("readline-sync") 
var numero = 0
var soma = 0
var elementos = 0

while(numero >= 0 ) {
  numero = parseInt(readLineSync.question("Digite um número: "))
  if (numero >=0) {
    soma = numero + soma  
  elementos ++
  }
}
var mediaArit = soma/elementos
console.log(`A média é: ${mediaArit}`)*/



        /*exerc_04_comandos_repeticao
          //Escreva um algoritmo que gere o números de 1000 a 1999 e escreva aqueles que dividido por 11 dão resto igual a 5.          
          var i = 1000
          while (i<=1999) {           
              i++
              if (i%11==5) {
                console.log(i)
              }                                             
            }*/   
                            
          
 // function exerc_05_comandos_repeticao
  //Escreva um algoritmo que leia 500 valores inteiros e positivos e:  
 /* a) encontre o maior valor;
  b) encontre o menor valor;
  c) calcule a média dos números lidos*/
 /* const readLineSync = require("readline-sync") 
  var valores = []
  var i = 0
  var num = 0
  var abobrinha = 0
  while (i<500) {
   num = (parseInt(readLineSync.question("Digite um número: ")))
    
    if(num >= 0) {
      valores.push(num)
      i++
    }
  }
  console.log(Math.max.apply(null, valores))
  console.log(Math.min.apply(null, valores))

  for(i = 0; i<valores.length; i++) {
    abobrinha = abobrinha + valores[i]

  
  }
console.log(abobrinha/valores.length)*/

//exerc_01_funcoes_procedimentos
 // Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.

/* function primo(number) {  
  

  if(number>0) {
    var numeroPrimo = true
    for ( var i=2; i<number; i++){
      if(number%i===0) {
        numeroPrimo = false
      }
    }
  } return numeroPrimo
 }
 console.log(primo(2))*/

 //function exerc_02_funcoes_procedimentos
 // Faça uma função que recebe por parâmetro o tempo de duração de uma tarefa expressa em segundos e retorna também por parâmetro esse tempo em horas, minutos e segundos.

 /*function tempo(segundos) {
 
  var hora = parseInt(segundos/3600)
  var resto = segundos%3600
  var minuto = parseInt(resto/60)
  var seg = parseInt(resto %60)
  console.log(`O tempo de duração da tarefa é: ${hora}horas ${minuto}min ${seg}segundos`)
 } 
 tempo(7780)*/


 //exerc_03_funcoes_procedimentos
 // Faça um procedimento que recebe a idade de um nadador por parâmetro e retorna , também por parâmetro, a categoria desse nadador de acordo com a tabela abaixo:  
/*Idade                           Categoria
5 a 7 anos                       Infantil A
8 a 10 anos                      Infantil B
11-13 anos                       Juvenil A
14-17 anos                       Juvenil B
Maiores de 18 anos (inclusive)   Adulto*/

/*function categoria(idade) {
  
if(idade==5 || idade<=7) {
  console.log('infantil A')
} else if(idade==8 || idade<=10) {
  console.log('infantil B')
}else if(idade==11 || idade<=13){
  console.log('juvenil A')
}else if(idade==14 || idade<=17) {
  console.log('juvenil B')
}  else if(idade>=18) {
    console.log('Adultos')
  }
  }
  categoria(19)*/

//exerc_01_Vetores_e_Matrizes_c/_Procedimentos_e_Funções
//Foi realizada uma pesquisa entre 500 habitantes de uma certa região. De cada habitante foram coletados os dados: idade, sexo, salário e número de filhos. Faça um procedimento que leia esses dados em um vetor de registro.

/* function dados() {
  var hab = []
  const readLineSync = require("readline-sync")    
  for(var i=0; i<500; i++) {
    var idade = parseInt(readLineSync.question("Digite idade: "))
    var sexo = readLineSync.question("Digite sexo(M/F): ")
    var salario = readLineSync.question("Digite salario: ")
    var filhos = parseInt(readLineSync.question("Digite número de filhos: "))
   hab.push([idade, sexo, salario, filhos])
    
  }console.log(hab) 
 }
  dados()*/
  

//exerc_02_Vetores_e_Matrizes_c/_Procedimentos_e_Funções 
//Faça um procedimento que recebe um vetor X de 30 elementos inteiros, por parâmetro, e retorna, também por parâmetro, dois vetores A e B. O vetor A deve conter os elementos pares de X e o vetor B, os elementos ímpares.
/*function recebe(vetor) {
  vetorA = []
  vetorB = []

for(var i=0; i<30; i++) {
  if(vetor[i]%2==0){
    vetorA.push(vetor[i])
  } else {vetorB.push(vetor[i])
}  
}
  return [vetorA, vetorB]
}
console.log(recebe([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))*/

//exerc_03_Vetores_e_Matrizes_c/_Procedimentos_e_Funções
//Faça um procedimento que receba um vetor A(100) de inteiros e retorna esse mesmo vetor compactado, ou seja, sem os seus valores nulos(zero) e negativos.

//exerc_04_Vetores_e_Matrizes_c/_Procedimentos_e_Funções
//Faça uma função que recebe, por parâmetro, uma matriz A(5,5) e retorna a soma dos seus elementos.
/*function nanana(matriz) {
  var soma = 0
  for(var i=0; i< 5; i++) {
    for(var x=0; x< 5; x++) {
      soma = soma + parseInt(matriz[i,x])
    }
  }
  return soma
}
var minhaMatriz =[[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]]
console.log(nanana(minhaMatriz))*/


////exerc_01_Vetores_e_Matrizes_c/_Procedimentos_e_Funções
//Faça um procedimento que receba uma matriz A(10,10), por parâmetro, e realize as seguintes trocas: a linha 2 com a linha 8;a coluna 4 com a coluna 10; linha 5 com a coluna 10
/*function bebebebe(matriz) {
  //a linha 2 com a linha 8
 var guardada = matriz[7]
 matriz[7]=matriz[1]
 matriz[1] = guardada
 

  //a coluna 4 com a coluna 10
  for(var i=0; i<10;i++) {
   var coluna = matriz[i][3]
    matriz[i][3] = matriz[i][9]
    matriz[i][9] = coluna

  }

  //linha 5 com a coluna 10

  var linhaTemp =[]

  for(var i=0; i<10; i++) {
    linhaTemp.push(matriz[i][9])
    matriz[i][9] = matriz[4][i] 
  }
  matriz[4] = linhaTemp
  console.log(matriz)
}

var minhaMatriz =[[1,1,1,'a',1,1,1,1,1,'b'],
                  [2,2,2,'a',2,2,2,2,2,'b'],
                  [3,3,3,'a',3,3,3,3,3,'b'],
                  [4,4,4,'a',4,4,4,4,4,'b'],
                  [5,5,5,'a',5,5,5,5,5,'b'],
                  [6,6,6,'a',6,6,6,6,6,'b'],
                  [7,7,7,'a',7,7,7,7,7,'b'],
                  [8,8,8,'a',8,8,8,8,8,'b'],
                  [9,9,9,'a',9,9,9,9,9,'b'],
               [10,10,10,'a',10,10,10,10,10,'b']]
bebebebe(minhaMatriz)*/

      



