import Head from 'next/head'
import Layout from '../../src/components/layout'
import styles from '../../src/styles/page/contact-us.module.css'
import { ContactParams } from '../../src/models/ContactParams'
import { useFormState } from '../../src/state/contact/useFormState'
import { useSendContactForm } from '../../src/state/contact/useSendContactForm'



const CoutactUsPage: React.FC = () => {
  const [contact, handleChange] = useFormState<ContactParams>({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [errorMessage, sendContactForm] = useSendContactForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactForm(contact);
  };

  return (
    <Layout>
      <Head>
        <title>お問い合わせ</title>
      </Head>
      <div className={styles.container}>
        <h2>お問い合わせフォーム</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <form method='post' onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formAndTitle} >
            <label className={styles.formTitle}>お名前*</label>
            <div >
              <input type='text' placeholder='お名前' name='name' onChange={handleChange} required className={styles.inputForm} />
            </div>
          </div>
          <div className={styles.formAndTitle}>
            <label className={styles.formTitle}>会社名</label>
            <div>
              <input type='text' placeholder='会社名' name='company' onChange={handleChange} className={styles.inputForm} />
            </div>
          </div>
          <div className={styles.formAndTitle}>
            <label className={styles.formTitle}>メールアドレス*</label>
            <div>
              <input type='email' placeholder='メールアドレス' name='email' onChange={handleChange} required className={styles.inputForm} />
            </div>
          </div>
          <div className={styles.formAndTitle}>
            <label className={styles.formTitle}>お問い合わせ内容*</label>
            <div>
              <textarea placeholder='お問い合わせ内容' name='message' onChange={handleChange} required className={styles.textArea} />
            </div>
          </div>
          <button type='submit'>送信</button>
        </form>
      </div>
    </Layout>
  );
};

export default CoutactUsPage;