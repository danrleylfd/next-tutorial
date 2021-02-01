import Link from 'next/link';

function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();
  return (
    <div>
      <h1>Relógio</h1>
      <Link href="/">
        <a>Acessar página Home</a>
      </Link>
      <br/>
      <Link href="/about">
        <a>Acessar página Sobre</a>
      </Link>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
    </div>
  );
}

export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();
  return {
    props: { staticDateString },
    revalidate: 3
  };
}

export default Tempo;
