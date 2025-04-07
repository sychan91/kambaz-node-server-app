import db from "../Database/index.js";
import model from "./model.js";
import {v4 as uuidv4} from "uuid";

export function findAssignmentForCourse(courseId) {
    // const {assignments} = db;
    // return assignments.filter((assignment) => assignment.course === courseId);
    return model.find({course: courseId});
}

export function deleteAssignment(assignmentId) {
    // const {assignments} = db;
    // db.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    return model.deleteOne({_id: assignmentId});
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    // const {assignments} = db;
    // const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    // Object.assign(assignment, assignmentUpdates);
    // return assignment;
    return model.updateOne({_id: assignmentId}, {$set: assignmentUpdates});
}

export function createAssignment(assignment) {
    // db.assignments = [...db.assignments, newAssignment];
    // return newAssignment;
    const newAssignment = {...assignment, _id: uuidv4()};
    return model.create(newAssignment);
}