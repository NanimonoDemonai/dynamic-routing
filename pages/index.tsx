import { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../component/Layout";
import {useRouter} from "next/router";

const Index: NextPage = () => {

    return (
  <Layout>
    <h1>ハローページ</h1>
    <p>Hello World!</p>
    <hr />
    <Link href="/kani">
      <a>カニについて知る</a>
    </Link>
  </Layout>
)};

export default Index;
