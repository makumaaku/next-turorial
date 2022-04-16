import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

interface BlogParams {
  dateString: string;
  title: string;
  imageUrl: string;
  tag: string;
}

// interface PostCreateRequest {
//   title: string;
//   markdown: string;
// }

// API のエントリポイント
//処理が2回走ってる?
export default function createPost(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  // ///TODO:エディターから渡してもらう
  const dateString = "2021-08-30";
  const title = req.body.title;
  const imageUrl =
    "https://mark-saito-next-blog.s3.ap-northeast-1.amazonaws.com/blog/1-ios-simulator-failed.jpg";
  const tag = "TEST";
  const metadata = blogMetadata({ dateString, title, imageUrl, tag });
  const markdown = req.body.markdown as string;
  const postString = metadata + "\n\n" + markdown;
  if (markdown === undefined || title === undefined) {
    return res.status(400).json({ status: "Bad request" });
  } else {
    fs.writeFileSync("./posts/test.md", postString);
    return res.status(200).json({ status: "OK" });
  }
}

function blogMetadata({
  dateString,
  title,
  imageUrl,
  tag,
}: BlogParams): string {
  return (
    `---\n` +
    `date: '${dateString}'\n` +
    `title: '${title}'\n` +
    `imageUrl: '${imageUrl}'\n` +
    `tag: '${tag}'\n` +
    `---`
  );
}
