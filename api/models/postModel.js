import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://imgs.search.brave.com/5VkTo51NT7Lld0dUCbqHiQvQBvnGvKTTc_brJI2TKMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTEz/MTcyMzU0L3Bob3Rv/L3dvcmQtYmxvZy1v/Zi1jb2xvci13b29k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz14clZEQ245Z21y/NTAzTkxKa3pEZzVV/LTluSW9waVBDekZK/bFhlaXZlOVlNPQ",
    },
    category: {
      type: String,
      default: "unauthorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
