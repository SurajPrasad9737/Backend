import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const port = process.env.PORT||3000;
const jokes = [
    {
        id:1,
        title:"First joke",
        content:"This is first joke content"
    },
    {
        id:2,
        title:"Second joke",
        content:"This is second joke content"
    },
    {
        id:3,
        title:"Third joke",
        content:"This is third joke content"
    }];
app.get('/',(req,res)=>{
    res.send('Server is ready');
})

app.get('/api/jokes',(req,res)=>{
    res.send(jokes);
});
app.get('/api/login',(req,res)=>{
    res.send("<script>alert('login')</script>");
})
app.listen(process.env.PORT,()=>{
    console.log(`App is listening on http://localhost:${port}`);
})