import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/page/top.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div></div>
      <Link href="/hp/contact-us">
        <a className={styles.contactUsBtn}>お問い合わせ</a>
      </Link>
      <p className={styles.copyRight}>©︎ 2021 ファーストアップ</p>
    </div>
  );
}
