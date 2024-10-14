const express =require('express');
const app=express();
const dbconnect =require('./src/config/dbconnection.js'); //import db //import router
const routes =require('./src/routes/adminroutes.js') ;
const cors =require('cors') 
dbconnect();
app.use(express.json());
app.use(cors());

app.post('/',(req,res)=>{
    res.send('Hello, How are you??');
})
app.use('/auth',routes);

const port=5000;
app.listen(port,()=>{
    console.log(`Server is running with ${port}`);
})