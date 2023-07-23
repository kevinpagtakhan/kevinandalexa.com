import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const reqGuest = await req.json();
  const guest = await prisma.guest.create({
    data: {
      name: reqGuest.name,
      email: reqGuest.email,
      role: reqGuest.role,
    },
    include: {
      group: true,
    },
  });

  return NextResponse.json(guest);
}
