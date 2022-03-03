import React from "react";
import { ContactParams } from "../../../models/ContactParams";
import { useFormState } from "../../../state/contact/useFormState";
import { useSendContactForm } from "../../../state/contact/useSendContactForm";
import styled from "@emotion/styled";

export default function ContactArea() {
  const [contact, handleChange] = useFormState<ContactParams>({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [errorMessage, sendContactForm] = useSendContactForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactForm(contact);
  };
  return (
    <Container>
      <H2>お問い合わせ</H2>
      {errorMessage && <p>{errorMessage}</p>}
      <form method="post" onSubmit={handleSubmit}>
        <FormWrapper>
          <Label>お名前*</Label>
          <Input
            type="text"
            placeholder="お名前"
            name="name"
            onChange={handleChange}
            required
          />
        </FormWrapper>
        <FormWrapper>
          <Label>会社名</Label>
          <Input
            type="text"
            placeholder="会社名"
            name="company"
            onChange={handleChange}
          />
        </FormWrapper>
        <FormWrapper>
          <Label>メールアドレス*</Label>
          <Input
            type="email"
            placeholder="メールアドレス"
            name="email"
            onChange={handleChange}
            required
          />
        </FormWrapper>
        <FormWrapper>
          <Label>お問い合わせ内容*</Label>
          <TextArea
            placeholder="お問い合わせ内容"
            name="message"
            onChange={handleChange}
            required
          />
        </FormWrapper>
        <ButtonWrapper>
          <SubmitBtn type="submit">送信</SubmitBtn>
        </ButtonWrapper>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  text-align: center;
  text-decoration: underline black;
`;

const FormWrapper = styled.div`
  padding-bottom: 20px;
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

// https://webparts.cman.jp/button/submit/
//ここでcssを生成した
const SubmitBtn = styled.button`
  font-size: 12pt; /* 文字サイズ */
  text-align: center; /* 文字位置   */
  cursor: pointer; /* カーソル   */
  padding: 8px 24px; /* 余白       */
  background: #000000; /* 背景色     */
  color: #ffffff; /* 文字色     */
  line-height: 1em; /* 1行の高さ  */
  transition: 0.3s; /* なめらか変化 */
  box-shadow: 6px 6px 12px #666666; /* 影の設定 */
  border: 2px solid #000000; /* 枠の指定 */

  &:hover {
    box-shadow: none; /* カーソル時の影消去 */
    opacity: 1; /* カーソル時透明度 */
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  @media (max-width: 640px) {
    width: 80vw;
    padding: 10px;
    font-size: 16px;
  }
  @media (min-width: 640px) and (max-width: 768px) {
    width: 70vw;
    padding: 10px;
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60vw;
    padding: 10px;
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    width: 50vw;
    padding: 10px;
    font-size: 16px;
  }

  &:focus {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    outline: 0px;
    border-radius: 2px;
  }
`;

const TextArea = styled.textarea`
  @media (max-width: 640px) {
    height: 200px;
    width: 80vw;
    padding: 10px;
    font-size: 16px;
  }
  @media (min-width: 640px) and (max-width: 768px) {
    height: 200px;
    width: 70vw;
    padding: 10px;
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 200px;
    width: 60vw;
    padding: 10px;
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    height: 200px;
    width: 50vw;
    padding: 10px;
    font-size: 16px;
  }
  &:focus {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    outline: 0px;
    border-radius: 2px;
    border: solid 2px black;
  }
`;
