import Joi from 'joi';
export const passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
export default {
    signUp:{
        email:Joi.string().email().required(),
        userName:Joi.string().required(),
        password:Joi.string().regex(passwordReg).required()
    }
}
