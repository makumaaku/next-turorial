import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/page/app-list.module.css";

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
    <div className={styles.appCard}>
      <Link href={linkUrl}>
        <a>
          <Image
            priority
            layout="fixed"
            src={imageUrl}
            height={250}
            width={250}
            className={styles.appCardImage}
          />
          <p>{appName}</p>
        </a>
      </Link>
    </div>
  );
}
