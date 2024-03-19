import { prismaClient } from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { mail, password } = await request.json();
    const data = {
      mail,
      password,
    };
    const newUser = await prismaClient.user.create({
      data: {
        mail,
        password,
      },
    });
    // console.log(newUser);
    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
  }
}
