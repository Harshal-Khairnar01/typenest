import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json();

  const {
    title,
    slug,
    ogImage,
    content,
    excerpt,
    metaDescription,
    category,
    keywords,
    status,
  } = body;

  // console.log(
  //   title,
  //   slug,
  //   ogImage,
  //   content,
  //   excerpt,
  //   metaDescription,
  //   category,
  //   keywords,
  //   status
  // );
  console.log(metaDescription)
  if (!title || !content || !slug || !category || !session.user.id) {
    return NextResponse.json({ message: "Missing Fields" }), { status: 400 };
  }
  const statusPost = status || "DRAFT";


  try {
    let categoryCheck = await prisma.category.findUnique({
      where: { slug: category },
    });

    if (!categoryCheck) {
      categoryCheck = await prisma.category.create({
        data: {
          title: category.charAt(0).toUpperCase() + category.slice(1),
          slug: category,
        },
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        Content:content,
        slug,
        thumbnail: ogImage || null,
        desc: metaDescription || null,
        keywords: keywords || null,
        excerpt: excerpt || null,
        authorId: session.user.id,
        catSlug:categoryCheck.slug,
        status: statusPost,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.log(error.message)
    return NextResponse.json(
      { message: "Could not save post" },
      { status: 500 }
    );
  }
}
