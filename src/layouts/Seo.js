import Head from 'next/head';

const Seo = ({ title = 'BlueprintStack', styles = '', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <style>{styles}</style>
      </Head>
      {children}
    </>
  );
};

export default Seo;
