import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: {type: String, ref: "CourseModel"},
    description: String,
    availableFrom: Date,
    availableTime: String,
    dueDate: Date,
    dueTime: String,
    availableUntil: Date,
    points: Number,
},
{collection: 'assignments'}
);

export default assignmentSchema;