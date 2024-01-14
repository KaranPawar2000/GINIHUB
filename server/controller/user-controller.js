import { response } from 'express';
import User from '../model/user-schema.js';



export const userSignup =  async (request,response) => {
try{

const exist = await User.findOne({username: request.body.username});               //user data send to backend by signup
if (exist){
    return response.status(401).json({message:"Username already exist"}); 
}

const user = request.body;
 const newUser = new User(user);
 await newUser.save();


 response.status(200).json({messaage:user});                                    //responce saved object
}
catch(error){

    response.status(500).json({message: error.message});

}


}


    export const userLogin = async (request,response) => {
try{
const username=request.body.username;
const password=request.body.password;

let user =await User.findOne({username:username,password:password});
if(user){
    return response.status(200).json({data:user});                      //user data send to front end
}
else{
    return response.status(401).json('Invalid login');
}
}
catch(error){
response.status(500).json('Error',error.messaage);
}

    }
   