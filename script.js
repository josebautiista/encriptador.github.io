
let abecedario = ["a","e","i","o","u"," "]
let abecedariA = ["ai","enter","imes","ober","ufat"," "]

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
      validarE()
      
    }
  });

function validarE() {

    let text1=document.getElementById("text1")

    if (/^[a-z\s]+$/.test(text1.value)) {
        encriptar()
    }else {
        let text1color=document.getElementById("condiciones")

        text1color.style.color ="red"
        setTimeout(function(){
            text1color.style.color = "#58287F";
         }, 2000);
    }
    
}

function validarD() {

    let text1=document.getElementById("text1")

    if (/^[a-z\s]+$/.test(text1.value)) {
        desencriptar()
    }else {
        let text1color=document.getElementById("condiciones")

        text1color.style.color ="red"
        setTimeout(function(){
            text1color.style.color = "#58287F";
         }, 2000);
        
    }
    
}

function encriptar() {

    let frase = []
    let text1=document.getElementById("text1")
    let text2=document.getElementById("text2")

    for (let letras = 0; letras < text1.value.length; letras++) {
        
        if ( abecedario.indexOf(text1.value[letras]) != -1 ) {

            for (let i = 0; i < abecedario.length; i++) {

                if (text1.value[letras]==abecedario[i]) {
                    frase.push(abecedariA[i])
                }
                
            }
        }else{
            frase.push(text1.value[letras])
        }
    }        
    
    text2.value=frase.join("")
    
}

function desencriptar() {

    let text2=document.getElementById("text2")
    let frase = document.querySelector("#text1").value
    let nuevaF = frase.replace(/ober/g, "o").replace(/enter/g , "e").replace(/imes/g, "i").replace(/ai/g , "a").replace(/ufat/g,"u");
    text2.value=nuevaF
}

function copiar(){
    var contenido = document.getElementById('text2').value;

    navigator.clipboard.writeText(contenido)
    .then(() => {
        document.getElementById('text1').value=""
        document.getElementById('text2').value=""
    })
}



