
import mongoose from 'mongoose'
import { app } from './password.js';






 const main= async()=>{
     await mongoose.connect('mongodb://127.0.0.1:27017/password');

     console.log('database connected')

     app.listen(5000,()=>{
        console.log('app is listening')
     })


     
 }

 main()