const conectar = async ()=>{
if(global.conexao && global.conexao.state != 'disconected'){
return [global.conexao , "conexao sendo usada"];
}else{
const mysql = require('mysql2/promise');
const con = mysql.createConnection({
  host     : "127.0.0.1",
  user     : "root", // ALTERAR
  password : "123", // ALTERAR
  database : "dados"
})
global.conexao = await con;
console.log("*****************************************************");
console.log("---------->      Conexão Com Banco de Dados Criada");
console.log("*****************************************************");
return [con , "conexao criada"];
}
}





module.exports = { conectar }