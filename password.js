 import express from 'express'
  import crypto from 'crypto'

 export const app = express()
const port = 3000

app.use(express.json())

app.post('/', (req, res) => {

 const{password}=req.body;
 
 console.log('pass',password)
 
 const hashedPasshword=  crypto.createHash('sha256').update(password).digest('base64')




 

  res.send(`hashed password ${hashedPasshword}`)
})

