import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

const app = express()

// ✅ TEST ROUTE (TOP PRIORITY)
app.get("/test", (req, res) => {
  res.send("Backend is working!")
})

// ✅ MIDDLEWARE
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://yuthithaa-portfolioo.onrender.com",
  ],
  credentials: true,
}))
app.use(express.json())

// ✅ ROOT ROUTE
app.get("/", (req, res) => {
  res.send("<h1>✅ Backend is running successfully</h1><p>Visit /api/contact for API endpoints.</p>")
})

// ✅ HEALTH CHECK
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  })
})

// ✅ ROUTES
app.use("/api/contact", contactRoutes)

// ✅ 404 HANDLER (CATCH ALL)
app.use((req, res) => {
  console.log(`⚠️ 404 - Not Found: ${req.method} ${req.originalUrl}`)
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found on this server`,
  })
})

// ✅ ERROR HANDLER
app.use((err, req, res, next) => {
  console.error("❌ Global Error:", err.stack)
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  })
})

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

// ✅ START SERVER
const PORT = process.env.PORT || 5000
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is definitely running on port ${PORT}`)
  console.log(`🏠 Access it at http://0.0.0.0:${PORT}`)
})

// ✅ TRY TO CONNECT TO DB
connectDB()
