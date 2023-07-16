const express = require("express");
const empRecords = require("./employedb");
const router = express();
const cors = require("cors");

router.use(cors())
router.use(express.json())


//get
router.get('/employedb',(req,res)=>{
    res.json(empRecords)
})
router.post('/login',(req,res)=>{
    res.json({
        status: 'sucess',
        username,
        email,
    });
})

//post
router.post('/employedb',(req,res)=>{
    const {body} = req;
    const {username,email,password} = body;
    console.log(req.body);
    const user = {
        username,
        email,
        password
    }
    empRecords.push(user)
    //res.json(user)
    res.json({
        status: 'sucess'
    })
})

//update or put
// router.put('/employedb',(req,res)=>{
//     let username = req.body.username
//     let email = req.body.email
//     let password = req.body.password

//     let index = employedb.findIndex((employedb)=>{
//         return (register.username==username)
//     })
//     if(index){
//         const newObj = {
//             username,
//             email,
//             password
//         }
//         register[index] = newObj;
//         res.json(newObj)
//     }else{
//         res.status(404)
//     }
// })

router.listen(4500,()=>{
    console.log(`Listening at http://localhost:4500/employedb`);
});






