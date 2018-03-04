import express from 'express';
import constants from './config/constants';
import './config/database';
const app = express();



app.listen(constants.PORT,err=>{      
    if(err){
        throw err;
    }else{
        console.log('server running success.....',`PORT---`,constants.PORT,`NODE_ENV----`,process.env.NODE_ENV);
    }
});