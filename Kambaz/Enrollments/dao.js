import db from "../Database/index.js";
import model from "./model.js";

export async function enrollUserInCourse(user, course) {
  const existing = await model.findOne({ user, course });
  if (existing) return existing;
  return model.create({ user, course, _id: `${user}-${course}` });
}
  // const enrollment = { user: userId, course: courseId };
    // db.enrollments.push(enrollment);
    // return enrollment;
  
  export function unenrollUserFromCourse(user, course) {
    // db.enrollments = db.enrollments.filter(
    //   (e) => !(e.user === userId && e.course === courseId)
    // );
    // return { status: "unenrolled" };
    return model.deleteOne({user, course});
  }
  
  export async function findCoursesForUser(userId) {
    // const { courses, enrollments } = db;
    // return courses.filter((course) =>
    //   enrollments.some((e) => e.user === userId && e.course === course._id)
    // );
    const enrollments = await model.find({user: userId}).populate('course');
    return enrollments.map((enrollment) => enrollment.course);
  }

  export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({course: courseId}).populate('user');
    return enrollments.map((enrollment) => enrollment.user);
  }