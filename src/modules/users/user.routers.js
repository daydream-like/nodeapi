import {Router} from 'express';
import validate from 'express-validation';
import * as controllers from './user.controllers';
import * as validation from './user.validation';
const router = new Router();

router.post('/signUp',validate(controllers.signUp),controllers.signUp);

export default router;