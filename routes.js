const express = require ("express");
const router = express.Router();

//const faker = require("faker");
//let db = require("./db");

router.use(express.static('public'));

router.get('/',(req,res)=>{
    res.render('pages/home');
    //res.send('pag teste');
});

router.get('/about',(req,res)=>{

    res.render('pages/about');

});
router.get('/cadastro',(req,res)=>{
    //vetor com objeto literal (pra forma a tabela, pelo o que entendi)
    let users = [
        {name:"gabe",adress:"Rua Marechal Mallet",email:"exemplo@hotmail.com",age:20,height:1.60,vota:true},
        {name:"Luana",adress:"Rua Marechal Mallet",email:"exemplo@hotmail.com",age:20,height:1.60,vota:true},
        {name:"tingo",adress:"Rua Marechal Mallet",email:"exemplo@hotmail.com",age:20,height:1.60,vota:true}
    ]
    //aqui vai redenrizar a página criar juntos com as infos de users
    res.render('pages/cadastro',{users});
});

router.get('/cadastro/remove',(req,res)=>{
    res.send('foi removido');
});

router.get('/cadastro/update',(req,res)=>{
    res.send('atualizado');
});


module.exports = router;