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
router.get('/list',(req,res)=>{  //
    res.render('pages/list');
});

router.get('/new',(req,res)=>{  //
    res.render('pages/new');
});



router.get('/cadastro',(req,res)=>{ //callback - funcao que trata dado evento  GET

    //a funcao render pode receber um pametro na forma de objeto literal
    //no caso, ela irá receber um objeto com campo chamado users e com valor igual ao vetor users
    res.render('pages/cadastro',{users:users}); 
});

router.post('/cadastro/remove',(req,res)=>{
    //let item =req.body.id; //pega o valor passado através do parâmetro id e atribui a variável item. 
    let name = req.body.name;

    if(users.length==0){
        console.log("Erro: Não há elemento a ser removido!");
        return res.status(500).json({
            status:'error',
            error:`Removed element: ${name}`
        });

    } else {
        for(let cont=0;cont<users.length;cont++){
            if(users[cont].name==name){
                users.splice(cont,1);
                console.log("Elemento Removido: ",name);
                return res.status(200).json({
                    status:'sucess',
                    data:users
                });
                //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
            } else if(cont==users.length-1){
                console.log("Erro ao remover elemento: ",name);
                return res.status(400).json({
                    status:'error',
                    error:`Didn't Remove element: ${name}`
                });
            }
        }
    }
    
    
    //users.splice(item,1); //este método permite adicionar ou remover um item do vetor em uma dada posição. 
    //res.render('pages/cadastro',{users:users});
    //res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
    //console.log("Elemento Removido: ",name);
    
});


router.post('/cadastro/update',(req,res)=>{
    //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    users[req.body.id].name=req.body.name; //ID do objeto ou Tag: name
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].heigth=req.body.heigth;
    users[req.body.id].vote=req.body.vote;


    res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos
});

router.get('/cadastro/list',(req,res)=>{
    console.log("Olha a lista ae: ",users); 
    res.status(200).render('pages/list')

});

router.get('/lista',(req,res)=>{
    // console.log("Olha a lista ae: ",users)
    console.log('listagem funcionando(RENDERIZANDO /LISTAGEM)')
    res.status(200).render('pages/lista')
    // res.status(200).json({users: users})
    
});
router.get('/lista/update',(req,res)=>{
    res.status(200).send(JSON.stringify({users: users}))
});



router.post('/cadastro/add',(req,res)=>{
    let user={name:"",email:"",address:"",heigth:"",age:"",vote:""};

    user.name = req.body._name;
    user.email = req.body._email;
    user.address = req.body._address;
    user.heigth = req.body._heigth;
    user.age = req.body._age;
    user.vote = req.body._vote;

    users.push(user);
    console.log("Usuário cadastrado: ",user);
    
    res.status(200).render('pages/cadastro')
    
    

});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;