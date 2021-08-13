const express = require ("express");
const router = express.Router();
const faker = require("faker");

router.use(express.static('public'));

let db = require("./db");

router.get('/',(req,res)=>{
    res.send("pages/home");
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

module.exports = router;