import mongoose from 'mongoose';
import constants from './constants';

mongoose.Promise = global.Promise;

try{
    mongoose.connect(constants.MONGO_URL) ;
}catch(err){
    mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
.once('open',()=>console.log('mongdb running success'))
.on('error',(e)=>{
    throw e;
})