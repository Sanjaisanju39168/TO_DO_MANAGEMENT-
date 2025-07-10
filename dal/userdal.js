import {User} from "../models/user.js";

export const findUsername=async (username)=>
{
    return await User.findOne({username})
}
export const createUser=async(userdata)=>
{
return await User.create(userdata)
}