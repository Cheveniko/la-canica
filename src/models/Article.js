import { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
      trim: true,
    },
    body: {
      type: String,
      required: [true, "body field is required"],
    },
    category: {
      type: String,
      lowercase: true,
      default: "uncategorized",
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    kind: {
      type: String,
      enum: ["main", "trending", "news"],
      default: "news",
    },
    img_url: {
      type: String,
      required: [true, "img_url field is required "],
    },
    slug: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default models.Article || model("Article", ArticleSchema, "articles");
