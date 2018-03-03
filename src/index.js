import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT,err=>{      
    if(err){
        throw err;
    }else{
        console.log('server running success.....',`PORT---`,PORT,`NODE_ENV----`,process.env.NODE_ENV);
    }
});