import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required : [true , "Title is required"],
    },
    description: {
      type: String,
      // required : [true , "Description is required"],
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const Todo = mongoose.model("Todo", todoSchema);
