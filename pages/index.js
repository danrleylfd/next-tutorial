import { useState } from 'react'
import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
      <Link href="/about">
        <a>Acessar página sobre</a>
      </Link>
    </div>
  );
}

function Contador() {
  const [contador,setContador] = useState(1);
  function adicionarContador(){
    setContador(contador+1)
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>adicionar</button>
    </div>
  );
}

export default Home;
