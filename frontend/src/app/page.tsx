import styles from "./page.module.scss";
import logoImg from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  async function handlerLogin(formdata: FormData) {
    "use server";
    const email = formdata.get("email");
    const password = formdata.get("password");
    if (!email || !password) {
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      if (!response.data.token) {
        throw new Error("Token not found!");
      }

      // Definir tempo de expiração do token em segundos
      const expressTime = 60 * 60 * 24 * 7; // 7 dias
      const cookieStore = await cookies();
      // Salvar o token na cookie
      cookieStore.set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production", // Para ambientes de produção, usar HTTPS
        sameSite: "strict",
      });
    } catch (error) {
      console.log(error);
      return;
    }

    redirect("/dashboard");
  }
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" />

        <section className={styles.login}>
          <form action={handlerLogin}>
            <input
              type="email"
              placeholder="Digite seu e-mail!"
              required
              name="email"
              className={styles.input}
            />

            <input
              type="password"
              placeholder="#########"
              required
              name="password"
              className={styles.input}
            />

            <button className={styles.button} type="submit">
              Logar
            </button>
          </form>

          <Link href="/signup" className={styles.register}>
            Não possui uma conta? Cadastre-se
          </Link>
        </section>
      </div>
    </>
  );
}
