const Task = require('../models/task')
const getAlltasks = async (req,res) => { 

    try{
    const task = await Task.find({})
    res.status(200).json({task})
    }catch{
        res.status(500).json({msg:error})

    }
    
}

const createtask = async (req,res) => { 
    try{
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    }catch(error){
       res.status(500).json({msg:error})
    }
   
    }

const gettask = async (req,res) => { 
    // alias
   
    try {
        const{id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){

            return res.status(404).json({msg: `No resource found with id:${taskID}`})
        
           }
        res.json({ task})
   
    

    } catch (error) {
        res.status(500).json({msg:error})
    }
   
    }



const deletetask = async (req,res) => { 

try {
    const{id:taskID} = req.params
const task = await Task.findOneAndDelete({_id:taskID})
if(!task){

    return res.status(404).json({msg: `No resource found with id:${taskID}`})

   }
res.send({task})

} catch (error) {
    res.status(500).json({msg:error})
}
            }
    


const updatetask = async (req,res) => { 
     const {id:taskID} = req.params
     const task = await Task.findByIdAndUpdate(
        {_id:taskID}, req.body, {new:true, returnDocument:true,})
        if(!task){

            return res.status(404).json({msg: `No resource found with id:${taskID}`})
        
           }
      res.status(200).json({task})
     


    
}
module.exports = {
    getAlltasks,createtask, gettask, updatetask, deletetask
}