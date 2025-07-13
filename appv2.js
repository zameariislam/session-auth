
import express from 'express'

import jwt from 'jsonwebtoken'

const app=express()

app.use(express.json())

const JWT_SECRET='ASWEDNFBGDG12344@:'


app.post('/signin',(req,res)=>{

    const {username,password}=req.body;

    const data={
        username,
        password
    }

   
    if(!password) res.send('Password required')

        const token=jwt.sign({username}, JWT_SECRET,{ expiresIn:60*60})
        
        console.log('token',token)


    res.send(`Token is sent ${token}`)

})




app.get('/protected',(req,res)=>{

    const token=req.headers['authorization']?.split(' ')[1]


    console.log('token',token)
    

    if(!token)  return res.send('UnAuthorized User')

 jwt.verify(token, JWT_SECRET, function(err, decoded) {

    if(err){
      return   res.send('Invalid Token')
    }
       
    res.send('User is valid')
});

    

  

})



app.listen(5000,()=>{
    
    console.log('app is listening ')
})