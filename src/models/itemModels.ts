import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, "Please provide a Item Name"],
      unique: true,
    },
    number: {
      type: "number",
      required: [true, "Please provide a Quantity"],
    },
  },
  { timestamps: true }
);

const Item = mongoose.models.items || mongoose.model("items", itemSchema);

export default Item;
