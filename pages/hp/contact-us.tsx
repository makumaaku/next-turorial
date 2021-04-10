import Head from 'next/head'
import Layout from '../../src/components/layout'
import styles from '../../src/styles/page/contact-us.module.css'
import {ContactParams} from '../../src/models/ContactParams'
import {useFormState } from '../../src/state/contact/useFormState'
import {useSendContactForm } from '../../src/state/contact/useSendContactForm'



  const CoutactUsPage: React.FC = () => {
    const [contact, handleChange] = useFormState<ContactParams>({
      name: '',
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
        <h2>お問い合わせ</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <form method='post' onSubmit={handleSubmit}>
          <div className='field'>
            <label>お名前</label>
            <div>
              <input type='text' placeholder='お名前' name='name' onChange={handleChange} required />
            </div>
          </div>
          <div>
            <label>メールアドレス</label>
            <div>
              <input type='email' placeholder='メールアドレス' name='email' onChange={handleChange} required />
            </div>
          </div>
          <div>
            <label>お問い合わせ内容</label>
            <div>
              <textarea placeholder='Your Message' name='message' onChange={handleChange} required />
            </div>
          </div>
          <button type='submit'>お問い合わせをする</button>
        </form>
      </div>
      </Layout>
    );
  };
  
  export default CoutactUsPage;