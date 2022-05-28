import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import slug from 'remark-slug';
import toc from 'remark-toc';
import externalLink from 'remark-external-links'
import highlight from "remark-highlight.js";

const postsDirectory = path.join(process.cwd(), "posts");
const privacyPolicyDirectory = path.join(process.cwd(), "privacy-policy");

//全postを返却
export function getAllPostsData(isPost = true) {
  // Get file names under /posts
  const directory = isPost ? postsDirectory : privacyPolicyDirectory;
  const fileNames = fs.readdirSync(directory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        imageUrl: string;
        tag: string;
      }),
    };
  });
  return allPostsData;
}

//日付でソートした全postを返却
export function getSortedPostsData() {
  const posts = getAllPostsData();
  // Sort posts by date
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

//ブログのファイル名リストを返却(pathの生成に使用している)
export function getAllPostIds(isPost = true) {
  const directory = isPost ? postsDirectory : privacyPolicyDirectory;
  const fileNames: string[] = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

//渡されたタグを同じタグを持つpostを返却
export function getAllPostTags() {
  const posts = getAllPostsData();
  const allTags = posts.map((post) => {
    return {
      params: {
        tag: post.tag,
      },
    };
  });
  return allTags;
}

//渡されたタグを同じタグを持つpostを返却
export function getAllTagPosts(targetTag: string | string[]) {
  const posts = getAllPostsData();
  console.log("タグ名");
  console.log(targetTag);
  const sameTagPosts = posts.filter((post) => {
    return post.tag === targetTag;
  });
  return sameTagPosts;
}

export async function getPostData(id: string, isPost = true) {
  const directory = isPost ? postsDirectory : privacyPolicyDirectory;
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(slug)
    .use(toc, { heading: '目次', maxDepth: 2 })
    .use(html)
    .use(externalLink, { target: "_blank" })
    .use(highlight)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      date: string;
      title: string;
      imageUrl: string;
      tag: string;
    }),
  };
}
