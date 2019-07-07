import { NextPage } from "next";
import { Layout } from "../../component/Layout";
import Link from "next/link";
import { kanis } from "../../data/kanis";

const Kani: NextPage = () => (
  <Layout>
    <h1>カニとは？</h1>
    <hr />
    <p>甲殻類の節足動物。水中・水辺に住む。堅い殻に包まれた凶暴な生物。</p>

    <hr />

    {kanis.map(e => (
      <li key={e.name}>
        <Link href={`/kani/${e.name}`}>
          <a>{e.name}</a>
        </Link>
      </li>
    ))}

    <hr />
    <Link href="/kani/hoge">
      <a>カニほげへ</a>
    </Link>
    <br />
    <Link href="/hoge" as="/kani/hoge">
      <a>カニほげへと見せかけてルートのほげへ</a>
    </Link>
  </Layout>
);

export default Kani;
