const express = require('express');
const port=8000;
const app = express();
app.use('/',require('./routes'));

// setup view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,(err)=>{
    if(err){
        console.log(`Error -- ${err}`);

    }
    else{
        console.log(`Listening on port : ${port}`);
    }
})