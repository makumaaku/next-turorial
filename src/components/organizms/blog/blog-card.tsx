import React from "react";
import Image from "next/image";
import Link from "next/link";
import Date from "../../utils/date";
import styled from "@emotion/styled";

export default function BlogCard({
  imageUrl,
  pass,
  title,
  dateString,
  isPost,
}: {
  imageUrl: string;
  pass: string;
  title: string;
  dateString: string;
  isPost: boolean;
}) {
  const cardImageHeight = isPost ? 200 : 350;
  return (
    <CardContainer>
      <CardImage>
        <Link href={pass}>
          <a>
            <Image
              alt={title}
              priority
              src={imageUrl}
              height={cardImageHeight}
              width={350}
            />
            <CardInfo>
              <CardTitle>{title}</CardTitle>
              <LightText>
                <Date dateString={dateString} />
              </LightText>
            </CardInfo>
          </a>
        </Link>
      </CardImage>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.04, 1.04);
    transition: all 0.3s;
  }
`;

const CardImage = styled.div`
  border-radius: 8px 8px 0 0;
`;

const CardInfo = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.p`
  height: 50px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 700;
  margin-top: 0px;
`;

const LightText = styled.small`
  color: #666;
`;
