import express from 'express';
import constants from './config/constants';
import './config/database';
import middlewares from './config/middlewares';
import apiRouter from './modules';


const app = express();

middlewares(app);
app.get('/',(req,res)=>{
    res.send('hello world');
});

apiRouter(app);
console.log(process.env.NODE_ENV);
app.listen(constants.PORT,err=>{      
    if(err){
        throw err;
    }else{
        console.log('server running success.....',`PORT---`,constants.PORT,`NODE_ENV----`,process.env.NODE_ENV);
    }
});