import { useState } from 'react';
import Link from 'next/link'
import styles from '../../styles/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//faChevronRightなど、Font Awesomeのhtmlのクラス名をcamelCaseに変更すればOK



export default function Header() {
  const [showDrawer, toggleShowDrawer] = useState(false);

  return (
    <div className={styles.headerTop}>
      <Link href="/">
        <a>
          <p className={styles.headerTopTitle}> ファーストアップ</p>
        </a>
      </Link>

      <div className={styles.headerTopItems}>
        <Link href="/hp/app-list">
          <a>
            <p className={styles.headerTopItem}> 制作アプリ一覧</p>
          </a>
        </Link>
        <Link href="/posts/">
          <a>
            <p className={styles.headerTopItem}>ブログ</p>
          </a>
        </Link>
        <Link href="/hp/contact-us">
          <a>
            <p className={styles.headerTopItem}> お問い合わせ</p>
          </a>
        </Link>
      </div>
      <button onClick={() => console.log('aaaaaaaaa')} className={styles.headerMenu} >
      <FontAwesomeIcon icon={faBars} color="white" size="sm" />
      </button>
      
    </div>

  )
}