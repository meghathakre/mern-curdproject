const teacherModel = require("../model/TeacherModel");

const teacherDataSave = async (req, res) => {
    const { teacherid, name, subject, salary } = req.body;

    try {
        const teacher = await teacherModel.create({
            teacherid,
            teachername: name,
            subject,
            salary
        });
        return res.status(201).json(teacher); // 201 Created
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "MongoDB server not started!" });
    }
};

const teacherDataDisplay = async (req, res) => {
    try {
        const teacherData = await teacherModel.find();
        return res.status(200).json(teacherData);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Data from MongoDB not found" });
    }
};

const teacherDataSearch = async (req, res) => {
    const { teacherid } = req.body;

    try {
        const myData = await teacherModel.find({ teacherid });
        return res.status(200).json(myData);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Data from MongoDB not found" });
    }
};

const teacherDataUpdate = async (req, res) => {
    const { id, ...updateData } = req.body;

    try {
        const updatedTeacher = await teacherModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTeacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        return res.status(200).json(updatedTeacher);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error updating teacher" });
    }
};

const teacherDataDelete = async (req, res) => {
    const myid = req.body.id;

    try {
        const teacherdel = await teacherModel.findByIdAndDelete(myid);
        if (!teacherdel) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        return res.status(200).json({ message: "Record deleted successfully", deletedTeacher: teacherdel });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error deleting teacher" });
    }
};

const teacherDataEdit = async (req, res) => {
    const id = req.body.id;

    try {
        const teacherdata = await teacherModel.findById(id);
        if (!teacherdata) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        return res.status(200).json(teacherdata);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error retrieving teacher data" });
    }
};

module.exports = {
    teacherDataSave,
    teacherDataDisplay,
    teacherDataSearch,
    teacherDataUpdate,
    teacherDataDelete,
    teacherDataEdit
};
