import { connect } from "@/db/dbConfig";
import items from "@/models/itemModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const data = await items.find({});
    console.log(data);
    return NextResponse.json({ message: "User found", data: data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
