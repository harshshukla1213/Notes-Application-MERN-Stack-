const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/user_routes")
const { noteRouter } = require("./routes/note_routes")
require("dotenv").config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use("/user", userRouter)
app.use("/note", noteRouter)

app.get("/", (req, res)=>{
    res.send({
        message: "Start "
    })
})

app.listen(5000, async()=>{
    try
    {
        await connection
        console.log(" Congrats DB connected")
    }
    catch(error)
    {
        console.log(error)
    }
    console.log(` Ohh! Nice Server is running on port `)
})