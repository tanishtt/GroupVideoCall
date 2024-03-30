const express =require('express');
const app=express.Router();
const port=3000;
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is running on port ${port}`);
})