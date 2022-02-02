import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function posts() {
  return (
    <Layout>
      <Head>
        <title>Tous les posts</title>
      </Head>

      <h1>Section de tous les posts</h1>
      <p>Ceci est la page où tous vos posts vont apparaitre</p>

      <Link href={"/"}>Retour page acceuil</Link>
    </Layout>
  );
}
