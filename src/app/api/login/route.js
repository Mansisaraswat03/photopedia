import userModel from "@/models/userModels";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/connectDB/db";

connectDB();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const user = await userModel.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 400 });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
      return NextResponse.json({ message: "wrong password" }, { status: 400 });
    }

    const tokenData = {
      _id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    const response = NextResponse.json({
      token: token,
      message: "login successfully",
    });

    const cookiesOptions = {
      httpOnly: true,
      secure: true,
    };

    response.cookies.set("token", token, cookiesOptions);

    console.log("token", token);
    return response;
  } catch (error) {
    return NextResponse.json({ message: error.message || error });
  }
}
