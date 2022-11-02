// alert("pagina funciona!")

// let titulo = document.querySelector(".titulo");
// titulo.textContent = "mudei de ideia";
let limiteEcra = 10;
let teclado =document.querySelectorAll(".botao");
console.log(teclado);
teclado.forEach(function(botao){
       botao.addEventListener('click',()=>{
          if(limiteEcra > 0){
            console.log(botao.value);
            let visor= document.querySelector(".ecra");
            visor.value += botao.value;
            limiteEcra--;
  }// fechamento if    
  })//fechamento botao.addEventListener
}); // fechamento forEach
console.log(limiteEcra);
