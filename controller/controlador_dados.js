const contrl_dados = require("../model/querys_sql");





exports.exibe_notas = (async (req, res)=>{
   const usuarios = await contrl_dados.todosUsuarios()
  return usuarios 
})



exports.atualiza = (async (req, res)=>{
   let id = req.body.id
   let titulo = req.body.titulo
   let texto = req.body.texto
   
   const usuarios = await contrl_dados.update_nota(id, titulo, texto)
   return res.status(200).send(usuarios) 
})






exports.exibe_dados_sistema = (async (req, res)=>{
   const dado = await contrl_dados.inf()
   let texto = ["</br>INFORMAÇÕES SOBRE A CONEXÃO COM O BANCO DE DADOS</br>"];
   for(let i = 0; i < dado.length; i++){
       texto += "</br>"+dado[i]+"</br>"

       if((i+1)==dado.length){
          res.send(texto)
       }
   }
})











exports.deleta_dados = async(req, res)=>{
   let id = req.body.id
  await contrl_dados.deleta_nota(id)
  .then(()=>{
  res.status(200).send({status:"nota deletada"})
   })
  .catch(()=>{
  res.status(500).send({status:"erro no servidor"})
  })
}

exports.adiciona_dados = async(req, res)=>{
  let titulo = req.body.titulo;
  let texto = req.body.texto;
  await contrl_dados.add_nota(titulo, texto) 
  .then(()=>{
  res.status(200).send({status:"nota adicionada"})
  })
  .catch(()=>{
  res.status(500).send({status:"erro no servidor"})
  })
}


exports.edit = async(req, res)=>{
   let titulo = req.body.titulo;
   let texto = req.body.texto;
   let id = req.body.id;

let conteudo = {
   titulo:titulo,
   texto:texto,
   id:id
}

   res.render("editanotas.ejs",{
      texto: conteudo
      });
}
