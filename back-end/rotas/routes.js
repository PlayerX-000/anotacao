const express = require('express');
const router = express.Router();
const busca_dados = require("../../controlador/controlador");
/*************** GET *******************/

router.get("/", busca_dados.Inicial)


/***************************************/
/**************** POST *****************/

/***************************************/
/************* EXPORTSS ****************/

module.exports = router;

/***************************************/