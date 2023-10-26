import { NextRequest, NextResponse } from "next/server";
import { Article } from "@/models/Article";
import { connectDB } from "@/utils/mongoose";

type routeParams = {
  params: Params;
};

type Params = {
  slug: string;
};

export async function GET(req: NextRequest, { params }: routeParams) {
  await connectDB();
  try {
    const articleFound = await Article.findOne({ slug: params.slug });
    if (!articleFound) {
      return NextResponse.json({ message: "Article not found", status: 404 });
    }

    return NextResponse.json(articleFound);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({
      message: error.message,
      status: 404,
    });
  }
}

export async function PUT(req: NextRequest, { params }: routeParams) {
  await connectDB();

  try {
    const data = await req.json();
    const updatedArticle = await Article.findOneAndUpdate(
      { slug: params.slug },
      data,
      { new: true }
    );

    return NextResponse.json({
      message: "Artículo actualizado con éxito",
      body: updatedArticle,
      status: 200,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({ message: error.message });
  }
}

export async function DELETE(req: NextRequest, { params }: routeParams) {
  try {
    const deletedArticle = await Article.findByIdAndRemove(params.slug);
    return NextResponse.json(deletedArticle);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message });
  }
}
