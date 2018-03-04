import userRouter from './users/user.routers';

export default app =>{
    app.use('/api/v1/users',userRouter);
}
