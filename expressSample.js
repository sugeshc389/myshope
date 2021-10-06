const express=require('express')
const path=require('path')

const app=express()

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'sample.html'))
})
app.get('/about',(req,res) =>{
    res.send('About')
})











app.listen(3000,() =>{
    console.log('Server Started ')
})