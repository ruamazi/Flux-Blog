import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//get all comments of single post
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.Comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Somthing went wrong" }, { status: 500 })
    );
  }
};

//post a comment on single post
export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    JSON.stringify({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const comment = await prisma.Comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Somthing went wrong" }, { status: 500 })
    );
  }
};
