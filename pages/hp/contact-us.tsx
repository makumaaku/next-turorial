import Head from "next/head";
import Layout from "../../src/components/layout";
import ContactArea from "../../src/components/organizms/contact/contact-area"


const CoutactUsPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>お問い合わせ</title>
      </Head>
      <ContactArea />
    </Layout>
  );
};

export default CoutactUsPage;
