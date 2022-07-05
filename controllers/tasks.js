const Task = require("../models/Task");


const getAllTasks = async(req, res) => {
    try {
        const task = await Task.find({});
        res.status(201).json({ task });
        // res.status(201).json({ msg: "Done" })
    } catch (error) {
        res.status(500).json({ msg: error });
    }

}

const getTask = async(req, res) => {
    try {
        const taskID = req.params.id;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: "no such id is found" })

        }
        res.status(200).json({ task });
    } catch {
        res.status(500).json({ msg: error });
    }
}
const createTask = async(req, res) => {

    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateTask = async(req, res) => {
    try {
        const taskID = req.params.id;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            res.status(404).json({ msg: "No such ID found" });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteTask = async(req, res) => {
    try {
        const taskID = req.params.id;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: "Such id is Not found" });
        }
        res.status(200).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error });
    }

    res.send("Delete Task");
}


module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask
}