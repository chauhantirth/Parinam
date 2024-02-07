import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import result from "./routes/result.route.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.ATLAS_URI,
    {
        maxPoolSize:50,
        connectTimeoutMS:2500,
    }
).catch(err => {
    console.error(err.stack),
    process.exit(1)
}).then(async client => {
    app.use("/api/v1/result", result)
    app.use("*", (req, res) => {
        return res.status(404).json({ error: "404 not found" })
    })
    app.listen(port, () => {
        console.log(`Listening on Port: ${port}`)
    })
})