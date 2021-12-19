/*************** VARIAVEIS ***************s*****/

const express = require('express');
const porta = process.env.PORT || 2550;
const app = express();
const path = require('path');
const db = require("./back-end/conexao/db");
const bodyParser = require('body-parser');
const routes = require("./back-end/rotas/routes");

/**********************************************/
















/***************** DIRETORIOS ******************/

app.use(express.static(path.join(__dirname,'./public')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


/***********************************************/



/******************* ROTAS *********************/

app.use(routes);

app.set('view engine','ejs');

app.set('views','views');


/***********************************************/






/************* CONECTA AO BANCO DE DADOS ***********/

(async ()=>{
    await db.conectar();
    
})()

/***********************************************/










/************* INICIA SERVIDOR ****************/

app.listen(porta, () => { 
console.log("*****************************************************");
console.log(`---------->      Servidor iniciado`);
console.log("*****************************************************");
console.log(`---------->      http://localhost:${porta}/`);
console.log("*****************************************************");
console.log("\n");
}
);

/**********************************************/


module.exports = app;