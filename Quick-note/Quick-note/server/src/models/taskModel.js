import mongoose from 'mongoose';

const taskModel=mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        default:"personal task"
    },
    date:{
        type:String,
        required:true
    }
});

export default mongoose.model('notes',taskModel);