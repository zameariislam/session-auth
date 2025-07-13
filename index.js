 
  
  import cookieParser from 'cookie-parser';
import express from 'express'
  

  const app= express();

  app.use(express.json())

  app.use(cookieParser())


  let sessionStorage={}


  app.post('/login',(req,res)=>{

  
    const{name}=req.body
     
    res.cookie('name',name,{
     
      httpOnly:true,
      secure:true,

    
    })

    sessionStorage[name]={loggedIn:true}

    console.log('sessionstrore', sessionStorage)


    



   
    res.status(200).json({
      message:`cookie is set  for ${name}`
    })
  })
  





  app.get('/protected',(req,res)=>{


    const{ name}=req.cookies;
  

    if(sessionStorage[name] && sessionStorage[name].loggedIn){
      res.status(200).json({
      message:'User is authenticated'
    })

    }
   
     
     else{
       res.status(401).json({
      message:'User is not authenticated'
     })
     }
    
    

   
  })




  app.listen(5000,()=>{
    console.log(` app is running on port 5000`)
  })
 

