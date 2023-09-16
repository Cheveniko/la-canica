import { NextResponse } from "next/server";
import Article from "@/models/Article";

export async function GET(req, { params }) {
  try {
    const articleFound = await Article.findById(params.id);
    if (!articleFound) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(articleFound);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      error.message,
      { message: "Article not found" },
      { status: 404 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const updatedArticle = await Article.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(updatedArticle);
  } catch (error) {
    console.error(error);
    return NextResponse.json(error.message);
  }
}

export async function DELETE(req, { params }) {
  try {
    const deletedArticle = await Article.findByIdAndRemove(params.id);
    return NextResponse.json(deletedArticle);
  } catch (error) {
    console.error(error);
    return NextResponse.json(error.message);
  }
}
