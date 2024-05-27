import { connect } from "@/db/dbConfig";
import items from "@/models/itemModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { itemName, number } = reqBody;
    console.log(reqBody);

    const newItem = new items({
      itemName,
      number,
    });
    console.log("newItem: ",newItem);
    const savedItem = await newItem.save();
    console.log(savedItem);

    return NextResponse.json({
        message: "Item add succeccfuly",
        success: true,
        savedItem,
      });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
