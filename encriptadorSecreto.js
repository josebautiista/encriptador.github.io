function mostrar() {

    let frase = []
    let abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9]
    
    for (let letras = 0; letras < document.getElementById("text1").value.length; letras++) {
        
        document.getElementById("text1").value[letras]=frase.push(abecedario [Math.round(Math.random()*abecedario.length)])
    
    }        
    
    document.getElementById("text2").value=frase.join("")
    
}