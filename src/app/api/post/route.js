import { NextResponse } from "next/server";
import { Article } from "@/models/Article";

export async function POST(req) {
  try {
    const data = await req.json();
    const newArticle = new Article(data);
    const savedArticle = await newArticle.save();

    return NextResponse.json(savedArticle);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
