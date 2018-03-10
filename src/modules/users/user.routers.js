import {Router} from 'express';
import validate from 'express-validation';
import * as controllers from './user.controllers';
import * as validation from './user.validation';
import {authLocal} from '../../services/auth.services';
const router = new Router();

router.post('/signUp', validate(controllers.signUp), controllers.signUp);
router.post('/login', authLocal, controllers.login);

export default router;