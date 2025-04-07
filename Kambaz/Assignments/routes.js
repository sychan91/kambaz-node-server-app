import * as dao from './dao.js';

export default function AssignmentRoutes(app) {
    app.get('/api/courses/:courseId/assignments', async (req, res) => {
        const {courseId} = req.params;
        const assignments = await dao.findAssignmentForCourse(courseId);
        res.json(assignments);
    });

    app.delete('/api/assignments/:aid', (req, res) => {
        const {aid} = req.params;
        const result = dao.deleteAssignment(aid);
        res.json(result);
    });

    app.put('/api/assignments/:aid', async (req, res) => {
        const {aid} = req.params;
        const assignmentUpdates = req.body;
        const status = await dao.updateAssignment(aid, assignmentUpdates);
        res.send(status);
    });

    app.post('/api/courses/:courseId/assignments', async (req, res) => {
        const {courseId} = req.params;
        const assignment = {...req.body, course: courseId};
        const newAssignment = await dao.createAssignment(assignment);
        res.send(newAssignment);
    });
}