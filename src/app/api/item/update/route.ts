import { connect } from "@/db/dbConfig";
import items from "@/models/itemModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { itemName, number } = reqBody;
    console.log(reqBody);

    const item = await items.findOne({ itemName });
    if (!item) {
      return NextResponse.json(
        { error: "Item does not found" },
        { status: 400 }
      );
    }
    items
      .findOneAndUpdate({ itemName: item.itemName }, { number: number })
      .then(() => {
        console.log("Successfully loaded");
      })
      .catch((err: any) => {
        console.log(err);
        console.log("Failed to update item");
      });

    return NextResponse.json({
      message: "Update item succeccfuly",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
