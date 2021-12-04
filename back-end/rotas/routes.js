const express = require('express');
const router = express.Router();
const busca_dados = require("../../controlador/controlador");
/*************** GET *******************/

router.get("/", busca_dados.Inicial)

router.get("/inicio", busca_dados.Inicial)

router.get("/inicio/page2", busca_dados.Page2)

router.get("/inicio/page2/page3", busca_dados.Page3)

/***************************************/
/**************** POST *****************/

/***************************************/
/************* EXPORTSS ****************/

module.exports = router;

/***************************************/