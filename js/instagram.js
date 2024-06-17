var novoLink = "https://www.instagram.com/eacomp_ufma/";
var elementos = document.querySelectorAll('.social-links');
elementos.forEach(function(elemento) {
    var link = elemento.querySelector('a.instagram');
    if (link) {
        link.href = novoLink;
        link.target = "_blank"; 
    }
});