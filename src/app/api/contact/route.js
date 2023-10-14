import Contact from "@/models/Schema";
import dbConn from "@/utils/dbConn";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConn();
    await Contact.create(body);
    return NextResponse.json(
      {
        message: "Sent Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error Occured",
      },
      {
        status: 500,
      }
    );
  }
}
