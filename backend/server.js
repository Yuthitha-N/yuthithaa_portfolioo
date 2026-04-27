import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

const app = express()

// ✅ MIDDLEWARE
app.use(cors({
  origin: "http://localhost:3000",
}))
app.use(express.json())

// ✅ ROUTES
app.use("/api/contact", contactRoutes)

// ✅ MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message))

// ✅ SERVER START
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
