import Link from 'next/link';
import Contador from '../components/counter';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        <a>Acessar página Sobre</a>
      </Link>
      <br/>
      <Link href="/time">
        <a>Acessar Relógio</a>
      </Link>
      <Contador />
    </div>
  );
}

export default Home;
