const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
    type: String,
    required:[true, 'Enter a name PLZ'] ,   
    trim:true,
    maxlength:[20, 'name can not be more then 20 characters']
},   
    completed: {
        type:Boolean,
        default:false,
        
    },
})

module.exports = mongoose.model('Task', taskSchema)