import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { setCookie } from "nookies";

export async function POST(req: Request, res: Response) {
  const userData = await req.json();
  const cookieStore = await cookies();

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

    cookieStore.set("@ignitecall", user.id, {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error messages comes from back",
    });
  }
}
