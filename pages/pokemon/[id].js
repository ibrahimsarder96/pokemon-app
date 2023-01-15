import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


export async function getStaticPaths() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );
  const pokemon = await resp.json();

  return {
    paths: pokemon.map((pokemon) => ({
      params: { id: pokemon.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const resp = await fetch(
    `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
  );

  return {
    props: {
      pokemon: await resp.json(),
    },
    // revalidate: 30,
  };
}

export default function Details({ pokemon }) {
  return (
    <div className="bg-white h-screen">
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      
      <div className="px-20">
      <div className="flex py-9 justify-center">
      <Image
      src="/Logo.png"
      width='300'
      height="100"
      ></Image>
    </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 pt-20">
          <div className="text-black text-2xl">
          <p className="m-5">{pokemon.id}</p>
          <h1>{pokemon.name}</h1>
          <h1>{pokemon.type.join(", ")}</h1>
          </div>
        <div>
          <img
           className="w-96 hover:focus-within hover:cursor-pointer"
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name.english}
          />
        </div>
          <div>
          <table>
            <thead>
              <tr className="text-black">
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody className="mt-6">
              {pokemon.stats.map(({ name, value }) => (
                <tr key={name} className="text-black">
                  <td >{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <Link href="/">
        <button className="btn btn-sm bg-purple-400 text-white border-none items-center">Back Home</button>
        </Link>
      </div>
    </div>
  );
}