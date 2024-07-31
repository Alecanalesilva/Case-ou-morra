const texto = document.getElementById("texto")
const no = document.getElementById("no")
const fundo = document.getElementById("fundo")


var contador = 0

no.addEventListener("mousemove", function(){
    contador++

    let x = Math.floor( Math.random() * 100 )
    let y = Math.floor( Math.random() * 100 )

    no.style.bottom = y + "%"
     no.style.left = x + "%"

     if(contador == 10) {
        texto.innerHTML = "Tá fugindo"
     }

     if(contador == 20) {
        texto.innerHTML = "Vai ter que ser do meu jeito então..."

     }


})

function casar() {
    no.innerHTML = "CLARO!"

    setTimeout(function(){
        while( !confirm("confirma o casório?")){}
        alert("vos declaro casados!!!")
        window.close()
    },500)
}