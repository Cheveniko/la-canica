import { Schema, model, models, ObjectId } from "mongoose";

export interface IArticle {
  _id: ObjectId;
  title: string;
  body: string;
  category: string;
  date: Date;
  hidden: boolean;
  kind: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  img_url: string;
  slug: string;
}

const ArticleSchema: Schema = new Schema<IArticle>(
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
      default: new Date(),
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
      required: [true, "slug field is required"],
    },
  },
  { timestamps: true }
);

export const Article =
  models.Article || model<IArticle>("Article", ArticleSchema);
