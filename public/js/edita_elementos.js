const elemento = document.getElementById('conteudo');
function autoResize(el){
  while (el.scrollHeight > el.offsetHeight){
    el.rows += 1;
  }
}
autoResize(elemento);