import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function SigleBlog() {
  const tempTags = "spaceX, Nasa, Exploration";
  const temphtml = `
    <p>Demo Content </p>
    `;
  return (
    <section>
      <div className=" flex flex-col gap-4 items-center">
        <Image
          className=" rounded border-2 w-[90%] md:w-[700px]"
          src="/thumbnails/1.png"
          width={500}
          height={150}
          alt={"page title"}
        />
        <div className=" meta-of-a-blog space-y-2">
          <div className=" flex gap-2  items-center">
            <Calendar className=" text-gray-400 size-4" />
            <p className=" text-gray-400 text-xs">
              Created on:
              {dateFormat(new Date())}
            </p>
          </div>
          <div className=" text-xs flex items-center gap-2">
            <p>Categories:</p>
            <p className="  badge bg-gray-600/40 border  border-gray-700 w-fit px-2 py-1 rounded">
              Space Exploration
            </p>
          </div>
          <div className=" text-xs flex items-center gap-2">
            <p>Tags:</p>
            {tempTags.split(",").map((tag, index) => (
              <p
                key={index}
                className="  badge bg-gray-600/40 border  border-gray-700 w-fit px-2 py-1 rounded"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        {/* <div className=" content" dangerouslySetInnerHTML={{__html:temphtml}}></div> */}
        <p className=" text-sm w-[90%] md:w-2/3 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          explicabo laborum deserunt iste impedit. Eius nesciunt recusandae quo
          cumque illum quibusdam, quia ha
          <br />
          rum a sint necessitatibus, id odit, dolorum voluptates optio saepe
          animi quas! Dolorem aspernatur, dolore necessitatibus cum quaerat sunt
          alias illo cupiditate debitis quisquam odio iure ad, a ipsa libero
          laborum! Quas commodi quia neque fugiat, accusamus sequi qui
          voluptatum itaque id aspernatur earum, omnis ab nam, officia pariatur
          ullam unde at explicabo exercitationem quibusdam temporibus. Fuga, eos
          provident! Ullam accusamus eveniet minima vero animi quisquam nisi
          omnis unde labore illo, iusto est quod neque necessitatibus? Quasi
          error debitis ad blanditiis ipsa, quis consectetur quos hic aperiam
          dicta rem. Voluptate hic recusandae ducimus nulla accusantium voluptas
          quas debitis animi iure? At, fugit accusantium. Et est ipsam, nisi
          cumque dolores porro aspernatur quod nobis magnam earum. Hic, ducimus!
          Quisquam suscipit eaque totam alias magnam unde dolorem amet aperiam
          distinctio odit cobr rporis illo molestiae nobis, neque cupiditate rem
          eum mollitia placeat beatae. Veritatis libero, possimus maiores id
          consequuntur fuga impedit beatae dolore, laborum alias omnis esse
          necessitatibus iure? Iure in pariatur itaque exercitationem
          repellendus dolores cum ut repudiandae officiis, magnam alias est a
          velit aliquid non vitae, fugit rem perspiciatis.
        </p>
      </div>
    </section>
  );
}
