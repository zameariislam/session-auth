 
  
import cookieParser from 'cookie-parser';
import express from 'express'
import session from'express-session';

  const app= express();

  app.use(express.json())

  app.use(cookieParser())

  app.use(session({
  secret: 'zameari',         // used to sign the session ID cookie
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge:90000,httpOnly:true }          // set to true if using HTTPS
}));


  let sessionStorage={}


  app.post('/login',(req,res)=>{

  
    const{name}=req.body

    if(!name) res.status(400).send('UserName required')

      req.session.name=name;
      req.session.loggedIn=true


      console.log(session)

    
   
    res.status(200).json({
      message:`loggedin wuth session`
    })
  })
  




  app.get('/protected',(req,res)=>{


  
  

    if(req.session.loggedIn){
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

   app.get('/logout',(req,res)=>{


      req.session.destroy(()=>{
        res.send('user is logout')
      })    

   
  })




  app.listen(5000,()=>{
    console.log(` app is running on port 5000`)
  })
 

