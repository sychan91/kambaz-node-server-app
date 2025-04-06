// import db from "../Database/index.js";
import model from "./model.js";
import enrollmentModel from "../Enrollments/model.js";
import {v4 as uuidv4} from "uuid";

export async function findAllCourses() {
  const courses = await model.find();
  return courses;
}

export async function findCoursesForEnrolledUser(userId) {
  // const {courses, enrollments} = db;
  // const enrolledCourses = courses.filter((course) => enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
  // return enrolledCourses;
  // const enrollments = await enrollmentModel.find({user: String(userId)});
  const all = await enrollmentModel.find({});


const enrollments = all.filter(e => String(e.user) === String(userId));
  const courseIds = enrollments.map(e=> e.course);
  const courses = await model.find({_id: {$in: courseIds}});
  return courses;
}

export async function createCourse(course) {
  const newCourse = {...course, _id: uuidv4()};
  return model.create(newCourse);
}

export async function deleteCourse(courseId) {
  // const {courses, enrollments} = db;
  // db.courses = courses.filter((course) => course._id !== courseId);
  // db.enrollments = enrollments.filter((enrollment) => enrollment.course !== courseId);
  const status = await model.deleteOne({_id: courseId});
  return status;
}

export async function updateCourse(courseId, courseUpdates) {
  // const {courses} = db;
  // const course = courses.find((course) => course._id === courseId);
  // Object.assign(course, courseUpdates);
  // return course;
  const status = await model.updateOne({_id: courseId}, {$set: courseUpdates});
  return status;
}