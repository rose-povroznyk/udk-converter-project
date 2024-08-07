import React from 'react';

import styles from './Quote.module.sass';

const queotStr =
  'Є злочини гірші, ніж спалювати книжки, наприклад, не читати їх ©';

const Quote = () => {
  const queoteArr = queotStr.split('');
  const data = queoteArr.map((item, index) => (
    <span key={index} data-text={item}>
      {item}
    </span>
  ));
  return (
    <section className={styles['title-container']}>
      <h2 className={styles.heading}>{data}</h2>
    </section>
  );
};

export default Quote;
