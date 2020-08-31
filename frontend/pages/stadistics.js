import {useState} from 'react'; 
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Stadistics({ ranking }) {

  const listItems = ranking.response.map((element, index) =>
    <li key={index}>
      <h4>
      {element.title}
      </h4>
      <p>
        Palabras usadas: {element.keywords}
      </p>
    </li>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Estadísticas de productos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Estadísticas de productos
        </h1>
        <div className={styles.description}>
          Esta es la lista de los 20 productos más buscados
        </div>
        <div className={styles.grid}>
          <ol>
          {
            listItems
          }
          </ol>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/api/v1/stadistics')
  const ranking = await res.json()

  return {
    props: {
      ranking,
    },
  }
}