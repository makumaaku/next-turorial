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

  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    uploadPhoto(event.target);
  };

  return (
    <Container>
      <H16SizedBox></H16SizedBox>
      <h1>投稿を作成</h1>
      <form onSubmit={handleSubmit}>
        <Column>
          <TitleField type="text" id="post-title" placeholder="Title" />
          <H16SizedBox></H16SizedBox>
          <input
            id="photo-upload"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handlePhotoChange}
            // multiple={true}
          />
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

async function uploadPhoto(target: HTMLInputElement) {
  const file = (target.files as FileList)[0];
  if (file === undefined) return;
  const filename = encodeURIComponent(file.name);
  // 確認
  console.log(filename);
  // const res = await fetch(`/api/upload-image?file=${filename}`);
  // const { url, fields }: { url: string, fields: Fields } = await res.json();
  // console.log(url);
  // console.log(fields);
  // const formData = new FormData();

  // Object.entries({ ...fields, file }).forEach(([key, value]) => {
  //     formData.append(key, value);
  // });

  // const upload = await fetch(url, {
  //     method: 'POST',
  //     body: formData,
  // });

  // if (upload.ok) {
  //     console.log('Uploaded successfully!');
  // } else {
  //     console.error('Upload failed.');
  // }
}

async function makeMd(postTitle: string, markdown: string) {
  const url = "/api/create-post";
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

interface Fields {
  /**
   * A base64-encoded policy detailing what constitutes an acceptable POST
   * upload. Composed of the conditions and expiration provided to
   * s3.createPresignedPost
   */
  Policy: string;

  /**
   * A hex-encoded HMAC of the POST policy, signed with the credentials
   * provided to the S3 client.
   */
  "X-Amz-Signature": string;

  /**
   * Additional keys that must be included in the form to be submitted. This
   * will include signature metadata as well as any fields provided to
   * s3.createPresignedPost
   */
  [key: string]: string;
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
