const superheroes = require('superheroes')
const express = require('express');
const cors = require('cors');
const port = 4000;
const app = express();

app.use(cors({
    origin: ['http://localhost:4000', 'http://localhost:3000', 'http://192.168.1.54:3000']
}));

app.get('/',(req,res)=>{
    try {
        res.status(200).json({
            success:true,
            name: superheroes.random()
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            name: "Name not generated"
        })
    }
})

app.listen(port,()=>{
    console.log(`Listening at: http:localhost:${port}`);
})