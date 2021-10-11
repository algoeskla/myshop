import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css';
import ProductsBlock from '../components/ProductsBlock';

const Home = () => {
  const [products, setProducts] = useState([]);

  // ühekordne käima panemine
  useEffect(async () => {
    // Tahame pärida meie API käest tooteid:
    try {
      const response = await fetch('/api/products');
      const products = await response.json();
      setProducts(products.products);
    } catch (error) {
      console.error(error.message);
      setProducts([]);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>MyShop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Kõik tooted</h2>
        <ProductsBlock products={products} show={6} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home;