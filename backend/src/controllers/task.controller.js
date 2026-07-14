import Task from "../models/Task.js";



// ===============================
// CREATE TASK
// ===============================

export const createTask = async(req,res)=>{


    try{


        const task = await Task.create({

            ...req.body,

            userId:req.user.id

        });



        res.status(201).json({

            message:"Task Created Successfully",

            task

        });



    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};







// ===============================
// GET ALL TASKS
// ===============================


export const getTasks = async(req,res)=>{


    try{


        const {

            status,

            sort


        } = req.query;




        let filter={

            userId:req.user.id

        };




        if(status){

            filter.status=status;

        }






        let tasksQuery =
        Task.find(filter);






        if(sort==="latest"){


            tasksQuery.sort({

                createdAt:-1

            });


        }



        if(sort==="oldest"){


            tasksQuery.sort({

                createdAt:1

            });


        }




        const tasks =
        await tasksQuery;





        res.status(200).json(tasks);



    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};







// ===============================
// UPDATE TASK
// ===============================


export const updateTask = async(req,res)=>{


    try{


        const task =
        await Task.findOneAndUpdate(


            {

                _id:req.params.id,

                userId:req.user.id

            },


            req.body,


            {

                new:true

            }


        );





        if(!task){


            return res.status(404).json({

                message:"Task not found"

            });


        }






        res.status(200).json({

            message:"Task Updated",

            task

        });



    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};







// ===============================
// DELETE TASK
// ===============================


export const deleteTask = async(req,res)=>{


    try{


        const task =

        await Task.findOneAndDelete({

            _id:req.params.id,

            userId:req.user.id

        });






        if(!task){


            return res.status(404).json({

                message:"Task not found"

            });


        }





        res.status(200).json({

            message:"Task Deleted"

        });



    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};