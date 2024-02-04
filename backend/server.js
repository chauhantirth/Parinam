import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json());

app.use("/api", (req, res) => res.status(200).json({"status": "success"}))
app.use("*", (req, res) => res.status(404).json({error: "404 not found"}))

export default app