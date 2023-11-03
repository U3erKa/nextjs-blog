import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import type { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData, type PostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import type { FC } from 'react';

export const getStaticProps = async function ({ params }) {
  const postData = await getPostData(params!.id as string);

  return {
    props: {
      postData,
    },
  };
} satisfies GetStaticProps;

export const getStaticPaths = async function () {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
} satisfies GetStaticPaths;

type Props = {
  postData: PostData;
};

const Post = function ({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>{postData.title}</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
} satisfies FC<Props>;

export default Post;
