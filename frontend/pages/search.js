import {useState} from 'react'; 
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Products() {

  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  const onFormSubmit = e => {
    e.preventDefault();
    const port = process.env.PORT_BACKEND
    const baseUrl = `http://localhost:${port}/api/v1/products/list?keyword=${search}`

    fetch(baseUrl, {
        method: 'POST',
      })
      .then(response => response.json())
      .then(data => {
        setProducts(data.response)
      })
  }

  const onChangeValue = event => {
    setSearch(event.target.value)
  }

  const productsResults = products.map((value, index) => 
    <div key={`product-${index}`} className={styles.card}>
      <h4>{value.title}</h4>
    </div>
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Buscador de productos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenid@!
        </h1>

        <form onSubmit={onFormSubmit} className={styles.description}>
        <label className={styles.label}>
            Qué buscas?:
            <input type="text" name="search" onChange={onChangeValue} className={styles.labelText}/>
        </label>
        <input type="submit" value="Buscar" className={styles.submit}/>
        </form>

        <div className={styles.grid}>
          {
            productsResults
          }
        </div>
      </main>
    </div>
  )
}
