import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className="description">
          <code>Contract: 0x000000000000000000000000000000000000dEaD </code>
        </p>
      </footer>
    </>
  )
}
