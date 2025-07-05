import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";
export const runtime = "edge";

const font = fetch(new URL("./lato.ttf", import.meta.url)).then((res) =>
  res.arrayBuffer()
);
const logo = fetch(new URL("./favicon.png", import.meta.url))
  .then((res) => res.arrayBuffer())
  .then(
    (buffer) =>
      `data:image/png;base64,${Buffer.from(buffer).toString("base64")}`
  );

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const title =
      searchParams.get("title").charAt(0).toUpperCase() +
        searchParams.get("title").slice(1) || "Typenest";

    const [fontData, logoData] = await Promise.all([font, logo]);

    return new ImageResponse(
      (
        <div
          tw="flex text-white px-20 py-[70px] w-full h-full justify-between flex-col"
          style={{
            backgroundColor: "gray",
          }}
        >
          <h1
            tw=" text-[80px]"
            style={{
              textShadow: "0 2px 2px #000",
              backgroundImage: "linear-gradient(90deg,#fff 40%,#aaa)",
              backgroundClip: "text",
            }}
          >
            {title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap:"15px"
            }}
          >
            <h2 style={{ color: "black" }}>Powered by Typenest</h2>
            <img src={logoData} alt="Logo" width="70" height="70" tw="mb-1" />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "lato",
            data: await font,
            style: "italic",
          },
        ],
      }
    );
  } catch (error) {
    // console.log(error.message);
    return NextResponse.json(
      { message: "Failed to generate the OG Image" },
      { status: 500 }
    );
  }
}
