import Link from "next/link"

export default function NotFound() {
  return (
    <>
    <h1>404</h1>
    <p>Parece que este pokemon não foi capturado</p>
    <Link href={"/"}>
      <a>Voltar</a>
    </Link>
    </>
  )
}