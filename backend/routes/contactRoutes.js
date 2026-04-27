import express from "express"
import jwt from "jsonwebtoken"
import Contact from "../models/Contact.js"

const router = express.Router()

// ✅ POST CONTACT + JWT TOKEN
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body

    console.log("📩 Incoming Data:", req.body)

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      })
    }

    // 🔐 GENERATE TOKEN
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    console.log("🔐 Generated Token:", token)

    // ✅ SAVE TO DB
    const contact = await Contact.create({
      name,
      email,
      message,
      token,
    })

    res.status(201).json({
      success: true,
      message: "Message stored successfully",
      token,
    })
  } catch (error) {
    console.error("❌ Error:", error.message)
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

export default router
