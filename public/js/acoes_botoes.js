$(document).ready(function()
{

  $('.excluirdadosedit').click((prop)=>{
    pega_id(prop,0)
})

$('.alteradadosedit').click((prop)=>{
    pega_id(prop,1)
})

$('.fechadadosedit').click((prop)=>{
    fecha_volta()
})
})


  function pega_id(props, chamada){
    const prop = props;

    const elemento = prop.target.parentElement
    const idr = elemento.id
    if(chamada==0){
    excluir(idr)
    }else
    if(chamada==1){
update(idr)
    }
  }




function update(ids){
const id = ids;
const texto = document.getElementById('conteudo').value;
const titulo = document.getElementById('titulo').value;
  $.ajax({
      url: "/user/adiciona/notas/update",
      method: "POST",
      data:({ 
          id: id,
          titulo: titulo,
          texto: texto
      }),
      success: (resposta)=>{
      console.log(resposta);
      },
    error: function(erro) {
        console.log('ocorreu um erro inesperado');
        console.log(erro)
    }
    })
  
  }



function excluir(ide){
const ids = ide

$.ajax({
  url: "/user/deleta/notas",
  method: "POST",
  data:({ id: ids }),
  success: (resposta)=>{
  console.log(resposta);
  document.location.assign('http://localhost:2550/user/notas');
  },
error: function(erro) {
    console.log('ocorreu um erro inesperado');
    console.log(erro)
}
})
}

function fecha_volta(){
    //window.history.back();
    document.location.assign('http://localhost:2550/user/notas');
}