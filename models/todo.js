import mon from "mongoose";

const todoSchema=new mon.Schema(
    {
        userId: { type: mon.Schema.Types.ObjectId, ref: 'User', required: true },
        description:{type:String,required:true},
        status:{type:String,enum:["assigned",'started','completed'],default:'assigned'}
    }
)
export const todo=mon.model("to-do",todoSchema)
