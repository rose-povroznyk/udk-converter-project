import React from 'react';
import Quote from '../components/Title/Quote';
import UDKConverter from '../components/UDKConverter/UDKConverter';
import book from '../images/book.gif';
import styles from './Home.module.sass';

const App = () => {
  return (
    <main className={styles['app-container']}>
      <Quote />
      <h1 className={styles.title}>ББК &lt;=&gt; УДК</h1>
      <UDKConverter />
      <img src={book} className={styles['app-img']} />
    </main>
  );
};

export default App;
