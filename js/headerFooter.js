function destacarBotao(){
  let nomeArquivo = window.location.pathname.split('/').pop();
  let botao;

  if(nomeArquivo=="trabalhos.html" || nomeArquivo=="videos-depoimentos.html"){
    botao = document.getElementById("headerChamada");
  }else if(nomeArquivo=="programacao.html"){
    botao = document.getElementById("headerProgramação");
  }else if(nomeArquivo=="inscricoes.html"){
    botao = document.getElementById("headerInscrição");
  }else if(nomeArquivo=="formularioTutorias.html" || nomeArquivo=="local.html" || nomeArquivo=="comissao.html"){
    botao = document.getElementById("HeaderInformação");
  }else{
    botao = document.getElementById("headerHome");
  }

  if(botao!=undefined){
    botao.classList.add("menu-active");
  }
}

fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-component').innerHTML = data;
    destacarBotao();
    const header = document.getElementById('nav-menu');

    header.addEventListener('mouseover', function() {
      console.log('O mouse está sobre a div.');
      let teste = document.getElementsByClassName('menu-active');

      for(let i=0;i<teste.length;i++){
        teste[i].classList.remove('menu-active')
        console.log(teste[i]);
      }
      
      header.addEventListener('mouseleave', function(){
        destacarBotao();
        header.removeEventListener('mouseleave', function() {
          // Seu código aqui
        });
      })

    });
    
    
  });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footer-component').innerHTML = data;
});