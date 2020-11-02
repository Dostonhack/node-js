const express= require('express')
const app = express();
const url=require('./url/user')
const port =process.env.PORT || 3000

app.get('/',(req,res)=>{
    // res.write("salom")
    res.send("Hi I am Work")
    // res.end()
});

app.get('/bay',(req,res)=>{
    res.write("Good Bay")
    res.end()
});

app.route('/')
    .get()
    .post()

app.get('/book*nice',(req,res)=>{
    
    res.send('<h1>salom nimadur</h1>');
    
});

app.get(/.*man$/,(req,res)=>{
    
    res.send('<h1>salom raqam</h1>');
    
});



app.get('/:name/',(req,res) =>{
    // const data=url.find(id => id ===id)
    
    const {name :firstname}=req.params;
    
    res.send(firstname)
});

app.listen(port, ()=>console.log('server ishlayapdi vuroooo'))