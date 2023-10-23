import { NextRequest, NextResponse } from "next/server";
import { Article } from "@/models/Article";

import { connectDB } from "@/utils/mongoose";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log(data);

    await connectDB();
    const newArticle = new Article(data);
    const savedArticle = await newArticle.save();

    console.log(savedArticle);

    return NextResponse.json({
      message: "Articulo subido exitosamente",
      body: savedArticle,
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      message: error.message,
      status: 400,
    });
  }
}
