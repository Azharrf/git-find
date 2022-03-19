import type { NextPage } from 'next';
import Head from 'next/head';
import MainPage from '../components/Layouts/Mainapage';

const Home: NextPage = () => (
  <section>
    <Head>
      <title>Find Git</title>
      <meta name="description" content="Fitur pencarian user github yang menampilkan data user dan respository." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainPage />
  </section>
);

export default Home;
