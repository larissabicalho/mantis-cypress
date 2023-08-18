//Conexão com banco de dados Mysql

import * as _ from "lodash";

const { create } = require('cypress/types/lodash');
const {
    createPool
} = require('mysql');


const pool = createPool({
    host:"bugtracker",
    user:"Usuario",
    password:"Senha",
    database:"Nome do Banco de Dados",
    connectionLimit: 'Limite de conexoes pelo Cypress',

    /* Pode ser adicionado um segundo banco caso necessario
    host:"Segundobanco",
    user:"root",
    password:"root",
    database:"bugtracker",
    connectionLimit: 10
    */
})
pool.query(`select password
from mantis_user_tableno
where username = "administrator" ` , (err,result,fields)  =>  {
    if(err){
        return console.log(err);
    }
return console.log(result);

})