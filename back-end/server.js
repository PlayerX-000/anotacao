/*************** VARIAVEIS ****************/

const express = require("express");
const porta = 8080;
const app = express();
const routes = require("./rotas/routes");
const path = require('path');

/*****************************************/
/*************** ROTAS *******************/

app.use(routes);
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(__dirname,'./paginas')));


/************* INICIA SERVIDOR ***********/

app.listen(porta, () => { 
console.log(`Servidor iniciado na porta: ${porta}`);
}
);

/*****************************************/