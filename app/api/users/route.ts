import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const userData = await request.json();

  const userExists = await prisma.user.findUnique({
    where: {
      username: userData.username,
    },
  });

  if (userExists) {
    return NextResponse.json(
      {
        message: "Usuariano ja existe",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const user = await prisma.user.create({
      data: {
        username: userData.username,
        fullname: userData.fullname,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error messages comes from back",
    });
  }
}
