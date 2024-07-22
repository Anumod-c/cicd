const express = require('express');
 const app = express();
 const PORT =  3000;
 app.get('/',(req,res)=>{
    res.send("CICD worked for the 15th time")
 })

 app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));