import userModel from './user.model';


export async function signUp(req,res) {
    try {
       const user = await userModel.create(req.body); 
       return res.status(500).json(user); 
    } catch (error) {
       return res.status(500).json(error); 
    } 
}