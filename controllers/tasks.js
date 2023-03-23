
const Task = require('../modules/task')
const asyncWrapper = require('../middleware/async')


const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({})
    res.status(200).json({ tasks, amount: tasks })

    
})

const createTask = asyncWrapper(async (req, res) => {

    //return لا تنسااا ال 
    const task = await Task.create(req.body)
    res.status(201).json({ task })

    //res.json(req.body)
})

const getTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
        //return لا تنسااا ال 
        return res.status(404).json({ msg: `No task with id : ${taskID} ` })
    }

})

const updateTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators
    })
    if (!task) {
        //return لا تنسااا ال 
        return res.status(404).json({ msg: `No tasks with id: ${taskID}` })
    }
    res.status(200).json({ id: taskID, data: req.body })

}
)
const editTask = {}

const deleteTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return res.status(404).json({ msg: `No task with id : ${taskID} ` })
    }
    res.status(200).json({ task })
})
module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask,


}