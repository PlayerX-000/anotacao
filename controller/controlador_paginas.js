let controlldados = require('./controlador_dados');
const contrl_dados = require("../model/querys_sql");

exports.Index = ((req, res)=>{
    res.render("index.ejs",{});
})

exports.Informa_dados = ((req, res)=>{
    controlldados.exibe_notas().then(function(data){
    res.render("informa_dados.ejs",{
    dados: data
    });
})
})

exports.inf_connect_bd = (async(req, res)=>{
    const dado = await contrl_dados.inf()
    
    res.render("informacoes.ejs",{
    dados: dado,
    });
})
