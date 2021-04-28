const Student = require("../models/Student");

const allStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    if (!student) {
      res.status(404).send("Student with this ID could not be found.");
    }
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, programme, indexNumber } = req.body;

    if (!name || !programme || !indexNumber) {
      return res.status(400).send("Please provide all fields.");
    }

    //create student
    const student = await Student.create({ name, programme, indexNumber });

    //return student
    res.status(201).json({ student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findByIdAndUpdate(studentId, req.body, {
      new: true,
    });
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    await Student.findByIdAndDelete(studentId);
    res.status(200).json({ message: "Student deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  allStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
