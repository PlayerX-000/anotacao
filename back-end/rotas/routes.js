const express = require('express');
const router = express.Router();
const contrl_pages = require("../../controller/controlador_paginas");
const contrl_dados = require("../../controller/controlador_dados")

/*************** GET *******************/

router.get("/", contrl_pages.Index);

router.get("/user/notas", contrl_pages.Informa_dados);

router.get("/sistema/dados/servidor/banco_de_dados/", contrl_pages.inf_connect_bd);

router.get("/sistema/dados/servidor/banco_de_dados/notcss", contrl_dados.exibe_dados_sistema);

/***************************************/

router.post("/user/deleta/notas", contrl_dados.deleta_dados)

router.post("/user/adiciona/notas", contrl_dados.adiciona_dados)



/**************** POST *****************/



/***************************************/
/************* EXPORTSS ****************/

module.exports = router;

/***************************************/