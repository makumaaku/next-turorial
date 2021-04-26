import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled"

export default function AppCard({
  imageUrl,
  linkUrl,
  appName,
}: {
  imageUrl: string;
  linkUrl: string;
  appName: string;
}) {
  return (
    <CardContainer>
      <CardImage>
        <Link href={linkUrl}>
          <a>
            <Image
              priority
              layout="fixed"
              src={imageUrl}
              height={250}
              width={250}
            />
            <CardName>{appName}</CardName>
          </a>
        </Link>
      </CardImage>
    </CardContainer>
  );
}

const CardContainer = styled.div`
width: 250px;
display: flex;
flex-direction: column;
margin: 10px;
border-radius: 8px;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
background:white;
`;

const CardImage = styled.div`
border-radius: 8px 8px 0 0;
`;

const CardName = styled.h4`
display: flex;
align-items:center;
justify-content:center;
font-size:18px;
`;

