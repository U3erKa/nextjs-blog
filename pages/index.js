import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>
          Read <Link href="/posts/first-post">this page!</Link>
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
    </Layout>
  );
}
