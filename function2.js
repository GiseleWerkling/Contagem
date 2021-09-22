var numerodepessoas

numerodepessoas = prompt ("digite um número")
for (let i=0; i<=numerodepessoas; i++ ) {
    if (i==0) {
        document.write (i+ ' é zero')
    }
    else if (i%2==0){
        document.write (i+ ' é par')
    } else {
        document.write (i+ ' é impar')
    }
}
