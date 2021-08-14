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

    let usuarios=[];
    for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email:faker.internet.email(),avatar: faker.image.image()});
    }
    console.log(usuarios);
    res.render('pages/about',{usuarios});

});
router.get('/curriculo',(req,res)=>{
    res.send('meu curriculo');
});

router.get('/cadastro/insert',(req,res)=>{

});

router.get('/cadastro/list',(req,res)=>{});
//teste

module.exports = router;