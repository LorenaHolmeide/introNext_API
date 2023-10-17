import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (

    <div className="container">
      <Head>
        <title>Next.js oppgave</title>
      </Head>
      <h1>Intro Next.js oppgave</h1>
      <section>
        <Image
          src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80"
          alt="Picture of vinyl records"
          width={300}
          height={200}
          priority={true}
        />
      </section>
      <section className="linkAlbums">
        <Link href="/albums" >
          Go to albums
        </Link>
      </section>

    </div>
  );
};

export default Home;









