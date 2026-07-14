import mongoose from "mongoose";


const taskSchema = new mongoose.Schema(

{

    title:{

        type:String,

        required:true,

        trim:true

    },


    description:{

        type:String,

        default:""

    },


    priority:{

        type:String,

        enum:[
            "low",
            "medium",
            "high"
        ],

        default:"medium"

    },


    status:{

        type:String,

        enum:[

            "pending",

            "in-progress",

            "completed"

        ],

        default:"pending"

    },


    dueDate:{

        type:Date

    },


    userId:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"User",

        required:true

    }


},

{

    timestamps:true

}

);



const Task = mongoose.model(
    "Task",
    taskSchema
);



export default Task;