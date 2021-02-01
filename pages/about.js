import Link from 'next/link';

function About() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
      <Link href="/">
        <a>Acessar página Home</a>
      </Link>
    </div>
  );
}

export default About;
