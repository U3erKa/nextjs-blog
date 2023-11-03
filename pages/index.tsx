import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData, type PostData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import type { FC } from 'react';
import type { GetStaticProps } from 'next';

type Props = {
  allPostsData: Omit<PostData, 'contentHtml'>[];
};

export const getStaticProps = async function () {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
} satisfies GetStaticProps;
/*
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
*/
const Home = function ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>
          Read <Link href="/posts/ssg-ssr">this page!</Link>
        </h1>
        <p>
          “Hear this! I will kidnap Peach OVER and OVER until I pull it off! And
          no one can stop me! Losing is not an option! And neither is giving
          up!” —Bowser, Mario & Luigi: Dream Team
        </p>
        <p>
          Source:{' '}
          <a href="https://www.mariowiki.com/Bowser">
            https://www.mariowiki.com/Bowser
          </a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
} satisfies FC<Props>;

export default Home;
