import styles from "../styles/404.module.css";
import Link from "next/link"

export default function NotFound() {
  return (
    <div className={styles.not_found}>
      <h1>404</h1>
      <p>Parece que este pokemon não foi capturado</p>
      <Link href={"/"}>
        <a>Voltar</a>
      </Link>
    </div>
  )
}