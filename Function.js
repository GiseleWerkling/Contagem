// <![CDATA[
        /* SCRIPT DE VALOR INTEIRO 1*/
        var NOME;
        NOME = prompt ('Entre com seu nome:' , 'Digite-o aqui');
                
        var PESO;
        PESO = prompt ('Digite o seu peso aqui:');

        var ALTURA;
        ALTURA = prompt ('Digite a sua altura');
        
        var IMC;         
        IMC= PESO/(ALTURA*ALTURA)
        document.write (<br/> 'Oi ' + NOME + ' o seu IMC é '+ IMC);
        
        if (IMC<18.5){
                document.write ( ' Você está classifidado no BAIXO PESO ')
                } else if (IMC>= 18.5 && IMC<=24.9){
                        document.write ( ' Você está classifidado no PESO NORMAL')
                } else if (IMC>= 25.0 && IMC<=29.9){
                        document.write ( ' Você está classifidado no EXCESSO DE PESO')
                } else if (IMC>= 30.0 && IMC<=34.9){
                        document.write ( ' Você está classifidado na OBESIDADE DE CLASSE 1')
                } else if (IMC>= 35.0 && IMC<=39.9){
                        document.write ( ' Você está classifidado na OBESIDADE DE CLASSE 2')
                } else {
                        document.write ( ' Você está classifidado na OBESIDADE DE CLASSE 3')
                }

        //]]>