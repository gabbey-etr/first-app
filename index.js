const express = require ("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");

const port=3000;
const address="localhost";
//ativa uso do ejs
app.set('view engine','ejs');
app.use(expressLayouts);

app.use('/',routes);

const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});