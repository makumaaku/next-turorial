import React, { useState } from "react";
import styled from "@emotion/styled";
import PostPreview from "src/components/organizms/blog/post-preview";

export default function PostPage() {
  const [markdown, setMarkdown] = useState<string>();

  const setMarkDown = (e: any) => {
    e.preventDefault();

    setMarkdown(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //タイトルの取得
    const title = document.getElementById("post-title") as HTMLInputElement;
    makeMd(title.value, markdown);
  };

  return (
    <Container>
      <H16SizedBox></H16SizedBox>
      <h1>投稿を作成</h1>
      <form onSubmit={handleSubmit}>
        <Column>
          <TitleField type="text" id="post-title" placeholder="Title" />
          <H16SizedBox></H16SizedBox>
          <Row>
            <InputField
              name="md"
              id="md"
              placeholder="Markdownで記述"
              className="markdown-form resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none py-4 px-2"
              value={markdown}
              onChange={setMarkDown}
            ></InputField>
            <Preview>
              <PostPreview markdown={markdown} />
            </Preview>
          </Row>
          <H16SizedBox></H16SizedBox>
          <input type="submit" />
          <H16SizedBox></H16SizedBox>
        </Column>
      </form>
    </Container>
  );
}

async function makeMd(postTitle: string, markdown: string) {
  const url = "/api/create-post";
  console.log("111111");
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: postTitle, markdown: markdown }),
  });
  const res = await fetch(url);
  console.log(await res.json());
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0px 100px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const H16SizedBox = styled.div`
  height: 16px;
`;

const TitleField = styled.input`
  height: 50px;
  width: 70rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 8px gray;
  border: none;
`;

const InputField = styled.textarea`
  height: 500px;
  width: 40rem;
  border-radius: 10px;
  box-shadow: 0 0 8px gray;
  border: none;
`;

const Preview = styled.div`
  height: 500px;
  width: 40rem;
  border-radius: 10px;
  box-shadow: 0 0 8px gray;
  background: white;
`;
