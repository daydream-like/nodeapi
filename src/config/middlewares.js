import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import passport from 'passport';
const isProd = process.env.NODE_ENV === 'production';
const isDev= process.env.NODE_ENV === 'development';

export default app =>{
    if(isProd){
        app.use(compression());
        app.use(helmet());
    }
    if(isDev){
        app.use(morgan('dev'));
    }
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(passport.initialize());
}