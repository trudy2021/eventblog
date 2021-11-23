import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>copyright &copy;FemiEvents 2021</p>
      <p>
        <Link href="about">About This Project </Link>
      </p>
    </footer>
  );
}
