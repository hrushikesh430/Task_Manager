const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();
// middleware
app.use(express.json());

app.use(express.static("./public"));


app.get("/hello", (req, res) => {
    res.send("The Task Manager App");
})


app.use('/api/v1/tasks', tasks);

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, (res, req) => {
            console.log("The app is running on port 3000");
        })
    } catch (error) {
        console.log(error);
    }
}

start();