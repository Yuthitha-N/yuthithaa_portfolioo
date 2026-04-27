import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

const app = express()

// ✅ MIDDLEWARE
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://yuthithaa-portfolioo.onrender.com",
  ],
  credentials: true,
}))
app.use(express.json())

// ✅ ROUTES
app.use("/api/contact", contactRoutes)

// ✅ MONGODB CONNECTION
let isDBConnected = false

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
      retryWrites: true,
      maxPoolSize: 10,
    })
    isDBConnected = true
    console.log("✅ MongoDB Connected Successfully")
  } catch (err) {
    isDBConnected = false
    console.error("❌ MongoDB Connection Error:", err.message)
    console.log("⚠️ Server starting without database - you need to fix the MongoDB connection")
  }
}

// ✅ START SERVER IMMEDIATELY
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

// ✅ TRY TO CONNECT TO DB
connectDB()
