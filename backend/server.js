import express from "express"
import cors from "cors"
import result from "./routes/result.route.js"

const app = express()

app.use(cors())
app.use(express.json());

app.use("/api/v1/result", result)
app.use("*", (req, res) => res.status(404).json({error: "404 not found"}))

export default app