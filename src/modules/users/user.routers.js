import {Router} from 'express';
import * as controllers from './user.controllers';

const router = new Router();

router.post('/signUp',controllers.signUp);

export default router;