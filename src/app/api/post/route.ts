import { NextRequest, NextResponse } from "next/server";
import { Article } from "@/models/Article";
import { IArticle } from "@/models/Article";

import { newArticleValues } from "@/components/forms/NewArticleForm";

export async function POST(req: NextRequest) {
  try {
    const data: newArticleValues = await req.json();
    console.log(data);
    // const body: newArticleValues = data.body;

    // const submittedImage: File = data.image[0].file;

    // const newArticle = new Article(data);
    // const savedArticle = await newArticle.save();

    // return NextResponse.json(savedArticle);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
