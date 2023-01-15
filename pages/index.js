import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import HeaderMid from './Component/HeaderMid';
import Blog from './Component/Blog';

export async function getStaticProps() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );
  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

export default function Home({pokemon}) {
 if(pokemon){
  const data = pokemon.slice(0, 10);
  return (
    <div className='bg-white'>
      <Head>
        <title>Pokemon List</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </Head>
      <div className='bg-white h-screen'>
      <div>
          <div>
            <div style={{
              zindex: 1, 
              position: "absolute",
              width: '100vw', 
              height: '125vh'}}>
              <Image src="/Background.png" 
              alt="background" 
              layout="fill" 
              objectFit="cover"/>
            </div>
    <section>
       <div style={{position: 'relative'}} className="flex py-9 justify-center">
      <Image
      src="/Logo.png"
      width='300'
      height="100"
      ></Image>
    </div>
       <div
         className="grid lg:grid-cols-5 sm:grid-cols-1 gap-10 ml-7">
          {data.map((pokemon) => (
            <div className="card w-56 rounded-br-lg bg-white cursor-pointer hover:bg-blue-400 shadow-xl">
              <Link href={`/pokemon/${pokemon.id}`}>
              <p className="m-5">{pokemon.id}</p>
            <figure className="mx-10 pt-4">
            <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                 alt={pokemon.name}
                  className="rounded-xl" />
            </figure>
            <div className="ml-4 pb-4">
              <h2 className="text-black my-4 text-xl font-bold">{pokemon.name}</h2>
              <div className="flex gap-3">
                <button className="btn btn-sm hover:bg-lime-400 bg-lime-400 text-white border-none">Grass</button>
                <button className="btn btn-sm hover:bg-purple-400 bg-purple-400 text-white border-none">Poison</button>
              </div>
            </div>
              </Link>
          </div>
          ))}
        </div>
       </section>
          </div>
        <div className="pt-20 bg-white w-screen">
          <HeaderMid></HeaderMid>
          <Blog></Blog>
        </div>
        </div>
      </div>
    </div>
  )
 }
}
