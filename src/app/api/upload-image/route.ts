import { NextRequest, NextResponse } from "next/server";

import { uploadImageToBlobStorage } from "@/utils/blob-storage";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file = data.get("image") as File | null;

    if (!file)
      return NextResponse.json({
        message: "No existe el archivo",
        status: 400,
      });

    const img_url = await uploadImageToBlobStorage(file);

    return NextResponse.json({
      message: "Successfully uploaded image to blob storage",
      status: 200,
      img_url: img_url,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      message: error.message,
      status: 400,
    });
  }
}
