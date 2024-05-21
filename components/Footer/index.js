import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Terminator1601"
        target="_blank"
        rel="noopener noreferrer"
      >
        @Terminator1601 V.0.0.1
        <span className={styles.logo}>
          <img
            src="icons/icon16.png"
            alt="Logo"
            width={16}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
}
