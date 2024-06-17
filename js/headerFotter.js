class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="banner">
        <div>   
            <a href="index.html" class="img-logo"><img src="img/eacomp_logo.png" alt="" class="img-esq" id="img-esq"></a>
        </div>
        <div >
            <div class="titulo">
                <h1 class="subtituloMaior">IX EACOMP</h1>
                <p class="subtituloMenor">25 a 27 de Setembro de 2024 - UFMA - São Luís- MA - Brasil</p>
            </div>
        </div>
        <div>
            <a class="img-dir-1" href="https://portalpadrao.ufma.br/site" target="_blank"><img src="img/supporters/1.png" alt="" class="img-dir" id="img-dir-1"></a>
            <a class="img-dir-2" href="https://petcompufma.org" target="_blank"><img src="img/supporters/5.png" alt="" class="img-dir" id="img-dir-2"></a>
        </div>
    </div>
    <div class="banner-responsivo">
        <div>   
            <a href="index.html" class="img-logo"><img src="img/banner-esq.png" class="img-esq" alt="" id="img-esq"></a>
        </div>
        <div>
            <a class="img-dir-1" href="https://portalpadrao.ufma.br/site" target="_blank"><img src="img/supporters/1.png" alt="" class="img-dir" id="img-dir-1"></a>
            <a class="img-dir-2" href="https://petcompufma.org" target="_blank"><img src="img/supporters/5.png" alt="" class="img-dir" id="img-dir-2"></a>
        </div>
    </div>
    <div class="banner-responsivo2">
        <div>   
            <a href="index.html" class="img-logo"><img src="img/banner-esq.png" alt="" id="img-centro"></a>
        </div>
    </div>
    <header id="header">
        <div class="container">
            <nav id="nav-menu-container">
                <ul class="nav-menu">
                    <li class="menu-active"><a href="index.html">Home</a></li>
                    <li class="dropdown">
                    <a href="#" class="nav-link dropdown-toggle menu-active" id="navbarDropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Chamada</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="trabalhos.html">Trabalhos</a>  
                            <div class="dropdown-divider"></div>
                            <!--
                            <a class="dropdown-item" href="maratona.html">Maratona</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="gamejam.html">GAMEJAM</a>
                            <div class="dropdown-divider"></div>
                            -->
                            <a class="dropdown-item" href="videos-depoimentos.html">Vídeo Depoimento</a>    
                        </div>
                    </a>
                    </li>
                    <li><a href="programacao.html">Programação</a></li>
                    <li><a href="inscricoes.html">Inscrições</a></li>
                    <li class="dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Informações</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="formularioTutorias.html">Tutoriais e Webinars</a> 
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="local.html">Local</a> 
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="comissao.html">Comissão Organizadora</a>     
                            <!--
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="documentos-oficiais.html">Documentos Oficiais</a>   
                            -->
                        </div>
                    </a>
                    </li>
                    <!--
                    <li class="dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pós-evento</a>   
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="anais.html">Anais</a> 
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="certificados.html">Certificados</a>     
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="deliberacoes.html">Deliberações</a>              
                        </div>
                    </a>
                    </li>
                    
                    <li class="dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pós-evento</a>   
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="anais.html">Anais</a> 
                            <div class="dropdown-divider"></div>
                        </div>
                    </a>
                    </li>
                    -->

                    <li class="dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Versões</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="index.html">2024</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="2021/index.html">2021</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="2019/index.html">2019</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="2017/index.html">2017</a>
                        </div>
                    </a>
                    </li> 
                </ul>
            </nav>
            <!-- #nav-menu-container -->

        </div>
    </header>
    `;
  }
}

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="footer-top">
            <div class="footer-info" id="contatos">
                <h4 >Contatos</h4>
                <div id ="email">
                    <strong>E-mail:</strong> eacomp.ufma@gmail.com
                </div>
                <div class="social-links">
                    <a href="https://www.instagram.com/eacomp_ufma/" target="_blank" class="instagram"><i class="fa fa-instagram"></i></a>
                </div>  
            </div>
        </div>
        <div class="copyright">
            <strong>IX EAComp - 2024</strong>
        </div>
      `;
    }
  }

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);