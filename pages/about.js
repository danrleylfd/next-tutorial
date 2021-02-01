import Link from 'next/link';

function About() {
  return (
    <div>
      <h1>Sobre</h1>
      <Link href="/">
        <a>Acessar página Home</a>
      </Link>
      <br/>
      <Link href="/time">
        <a>Acessar Relógio</a>
      </Link>
    </div>
  );
}

export default About;
