import mongoose, {Schema} from 'mongoose';
import validator from 'validator';
import {passwordReg} from './user.validation';
import {hashSync, compareSync} from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import constants from '../../config/constants';
const UserSchema = new Schema({
    email: {
        type: String,
        required: [
            true, 'email is required!'
        ],
        trim: true,
        unique: true,
        validate: {
            validator(email) {
                return validator.isEmail(email)
            },
            message: '{VALUE} is not a valid email'
        }

    },
    userName: {
        type: String,
        required: [
            true, 'userName is required!'
        ],
        trim: true
    },
    password: {
        type: String,
        required: [
            6, 'password must be longer!'
        ],
        trim: true,
        minlength: 6,
        validate: {
            validator(password) {
                return passwordReg.test(password);
            },
            message: '{VALUE} is not a valid password'
        }
    }
});
UserSchema.pre('save', function (next) {
    console.log(this);
    if (this.isModified('password')) {
        console.log(this);
        this.password = this._hashPassword(this.password);
    }
    return next();
})

UserSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateUser(password) {
        return compareSync(password, this.password);
    },
    createToken() {
        return jwt.sign({
            _id: this._id
        }, constants.JWT_SECRET)
    },
    toJSON() {
        return {
            _id: this._id,
            email: this.email,
            userName: this.userName,
            token: this.createToken()
        }
    }
}
export default mongoose.model('User', UserSchema);