const texto = "Hoje celebramos Mulheres incriveis como você que sua força,beleza iluminem sempre o mundo!  Que Você NUNCA esqueça o quanto é especial e o quanto inspira quem está ao seu redor 💖";
let i = 0;
function start(){
digitar();
setInterval(criarCoracao,300);
}
function digitar(){
    let area = document.getElementById("mensagem");
    if ( i < texto.length){
        area.innerHTML+=texto.charAt(i);
        i++;
        setTimeout(digitar,50);
    }
}
function criarCoracao(){
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML="❤️";
    coracao.style.left = Math.random()*100 + "vw"
    document.body.appendChild(coracao);
    setTimeout(()=>{
        coracao.remove();
    },4000)
}
