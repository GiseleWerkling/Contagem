var numerodepessoas

numerodepessoas = prompt ("digite um número")
for (let i=1; i<=numerodepessoas; i++ ) {
    if (i%4==1){
        document.write (i+ ' é do time Azul <br/>')
    } else if (i%4==2){
        document.write (i+ ' é do time Rosa <br/>')
    } else if (i%4==3){
        document.write (i+ ' é do time Verde <br/>')
    } else {
        document.write (i+ ' é do time Amarelo <br/>')
    }
}