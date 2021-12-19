$(document).ready(function()
{

  $('.excluirdados').click((prop)=>{
    pega_id(prop)
})
})


  function pega_id(prop){
    const elemento = prop.target.parentElement
    const idr = elemento.id
    excluir(idr)
  }


function excluir(ide){
const ids = ide

$.ajax({
  url: "/user/deleta/notas",
  method: "POST",
  data:({ id: ids }),
  success: (resposta)=>{
  console.log(resposta);
  let elemento = document.getElementById(ids);
  elemento.remove()
  },
error: function(erro) {
    console.log('ocorreu um erro inesperado');
    console.log(erro)
}
})
}