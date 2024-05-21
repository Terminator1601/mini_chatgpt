import styles from '../../styles/Pages.module.css';

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>MiniGpt 1.0</h1>
        <p className={styles.description}>
          An extension which can make your life as a developer easy.
        </p>
        <button onClick={()=>navigateToPage('new')} className={styles.code}>Start</button>
        {/* <p onClick={() => navigateToPage('new')}>{"Go to New Page >"}</p> */}
      </main>
    </div>
  );
}
