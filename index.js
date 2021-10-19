const express = require('express');
const port=8000;
const app = express();

app.listen(port,(err)=>{
    if(err){
        console.log(`Error -- ${err}`);

    }
    else{
        console.log(`Listening on port : ${port}`);
    }
})