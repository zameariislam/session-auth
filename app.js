
import express from 'express'
import crypto from 'crypto'



const app=express()

app.use(express.json())


app.post('/signin',(req,res)=>{

    const {username,password}=req.body
    const data={
        username,
        password
    }

    const hash= crypto.createHmac('sha256','123hhhd',data).digest('hex')
    if(!password) res.send('Password required')


    res.send(`Hash is sent ${hash}`)

})



app.get('/signin',(req,res)=>{

    const {username,password}=req.body
    const data={
        username,
        password
    }

    const hash= crypto.createHmac('sha256','123hhhd',data).digest('hex')
    if(!password) res.send('Password required')


    res.send(`Hash is sent ${hash}`)

})


app.post('/protected',(req,res)=>{

    const hash=req.body.hash
    const data={
         username:"zameari",
     password:"zameari1234"
    }

    const hash2= crypto.createHmac('sha256','123hhhd',data).digest('hex')

    if(hash==hash2){
        return res.send('Authenticated User')
    }
      res.send(`UnAuthenticated User`)
  


  

})



app.listen(5000,()=>{
    
    console.log('app is listening ')
})