const conexao = require("../back-end/conexao/db")


const todosUsuarios = async ()=>{
    const con = await conexao.conectar();
    const [linhas] = await con[0].query('SELECT * FROM notas');
    return await linhas
}

const deleta_nota = async (id)=>{
    const con = await conexao.conectar();
    const [linhas] = await con[0].query(`DELETE from notas WHERE id=${id};`);
    return await linhas
}

const add_nota = async (titulo , texto)=>{
    const con = await conexao.conectar();
    const [linhas] = await con[0].query(`
    INSERT INTO notas (titulo,texto,criacao)
    VALUES ('${titulo}','${texto}',NOW());
    `);
    return linhas
}




const inf = async ()=> {

let dados = [];

await conexao.conectar().then((arr)=>{
   
dados.push("porta: "+arr[0].connection.config.port);
dados.push("host: "+ arr[0].connection.config.host);
dados.push("user: "+arr[0].connection.config.user);
dados.push("senha: "+arr[0].connection.config.password);
dados.push("banco de dados: "+arr[0].connection.config.database);
dados.push("ssl: "+arr[0].connection.config.ssl);
dados.push("server version: "+arr[0].connection._handshakePacket.serverVersion);
dados.push("tempo de conexao: "+arr[0].connection.config.connectTimeout);
dados.push("aut Plugin Name: "+arr[0].connection._handshakePacket.autPluginName);
dados.push("server Encoding: "+arr[0].connection.serverEncoding);
dados.push("status: "+arr[1]);

});
return dados
}



module.exports = { todosUsuarios , inf , deleta_nota , add_nota}