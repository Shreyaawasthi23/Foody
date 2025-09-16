import express from "express"
import { resetPassword, sendOTP, signIn, signOut, signUp, verifyOtp } from "../controllers/auth.controllers.js"

const authRouter = express.Router()

authRouter.post("/signup", signUp)
authRouter.post("/signin", signIn)
authRouter.post("/signout", signOut)
authRouter.post("/send-otp", sendOTP)
authRouter.post("/verify-otp", verifyOtp)
authRouter.post("/reset-password", resetPassword)

export default authRouter