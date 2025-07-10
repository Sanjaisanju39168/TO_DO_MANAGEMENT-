import mon from "mongoose";

const userSchema=new mon.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})


export  const User = mon.model("User",userSchema);