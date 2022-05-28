import React from "react";
import Image from "next/image";

function ProfileImage() {
  return (
    <Image
      src={
        "https://mark-saito-next-blog.s3-ap-northeast-1.amazonaws.com/profile-img.jpeg"
      }
      alt="プロフィール画像"
      height={150}
      width={150}
    />
  );
}

export default ProfileImage;
