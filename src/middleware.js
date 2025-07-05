import { NextResponse } from "next/server";

const allowedOrigins = [
  "http://localhost:3000",
  "https://typenest-by-harshal.vercel.app",
];

export async function middleware(request) {
  const origin = request.headers.get("origin");

  if (request.method === "OPTIONS") {
    if (origin && allowedOrigins.includes(origin)) {
      const response = NextResponse.next();
      response.headers.set("Access-Control-Allow-Origin", origin);
      response.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
      response.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      return response;
    } else {
      return NextResponse.json(
        { message: "CORS Blocked || Unauthorized" },
        { status: 403 }
      );
    }
  }

  if (request.method === "POST") {
    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { message: "CORS Blocked || Unauthorized" },
        { status: 403 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/v1/:path*",
};
