$(document).ready(function()
{

    $('#adddados').click(()=>{
      pega_dados()
})
})

function pega_dados(){
  const titulo = document.getElementById("titulo").value
  const texto = document.getElementById("texto").value
  leis(titulo , texto)
}





function leis(titulo_t , texto_t){
  const  titulo = titulo_t.trim()
  const  texto = texto_t.trim()

  const min_titulo_length = 1
  const max_titulo_length = 50

  const min_texto_length = 1
  const max_texto_length = 500

if((titulo.length>=min_titulo_length && titulo.length<=max_titulo_length) && (texto.length>=min_texto_length && texto.length<=max_texto_length)){
  env_pedido_para_adicionar(titulo , texto)
}
}




function env_pedido_para_adicionar(titulo , texto){
const titulovar = titulo;
const textovar = texto;

$.ajax({
  url: "/user/adiciona/notas",
  method: "POST",
  data:({
titulo: titulovar,
texto: textovar
}),
success: (resposta)=>{
  console.log(resposta);
  location.reload();
  },
error: function(erro) {
  console.log('ocorreu um erro inesperado');
  console.log(erro)
}
})
}