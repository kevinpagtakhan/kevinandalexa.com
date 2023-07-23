import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const guests = await prisma.guest.findMany({
    orderBy: {
      name: "desc",
    },
    include: {
      group: true,
    },
  });

  return NextResponse.json(guests);
}

export async function DELETE(req: Request): Promise<NextResponse> {
  const reqGuests: string[] = await req.json();

  const guest = await prisma.guest.deleteMany({
    where: {
      id: {
        in: reqGuests,
      },
    },
  });

  return NextResponse.json({
    success: guest.count === reqGuests.length,
  });
}