import mongoose,{Schema} from 'mongoose';
import validator from 'validator';
import {passwordReg} from './user.validation';
const UserSchema = new Schema({
    email:{
        type:String,
        required:[true,'email is required!'],
        trim:true,
        unique:true,
        validate:{
            validator(email){
                return validator.isEmail(email)
            },
            message:'{VALUE} is not a valid email',
        }

    },
    userName:{
        type:String,
        required:[true,'userName is required!'],
        trim:true,
    },
    password:{
        type:String,
        required:[6,'password must be longer!'],
        trim:true,
        minlength:6,
        validate:{
            validator(password){
                return passwordReg.test(password);
            },
            message:'{VALUE} is not a valid password',
        }
    }
});
export default mongoose.model('User',UserSchema);