import Image from "next/image";
import Link from "next/link";
import Date from "../date";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/page/blog.module.css";

export default function BlogCard({
  imageUrl,
  pass,
  title,
  dateString,
}: {
  imageUrl: string;
  pass: string;
  title: string;
  dateString: string;
}) {
  return (
    <div className={styles.blogCard}>
      <Link href={pass}>
        <a>
          <Image
            priority
            src={imageUrl}
            height={200}
            width={350}
            className={styles.blogCardImage}
          />
          <section className={styles.blogCardInfo}>
            <p className={styles.blogCardTitle}>{title}</p>
            <small className={utilStyles.lightText}>
              <Date dateString={dateString} />
            </small>
          </section>
        </a>
      </Link>
    </div>
  );
}
