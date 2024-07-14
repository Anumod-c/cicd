const express = require('express');
 const app = express();
 const PORT =  3000;
 app.get('/',(req,res)=>{
    res.send("Hello World from CICD and it successfully worked (3)")
 })

 app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));