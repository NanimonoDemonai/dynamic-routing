import { NextPage } from "next";
import { Layout } from "../../../component/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

const KaniName: NextPage = () => {
  const router = useRouter();
  const { kaniname } = router.query;
  return (
    <Layout>
      <h1>{kaniname}</h1>
      <hr />
        <Link href={`/kani/${kaniname}/description`}>
            <a>説明を見る</a>
        </Link>
    </Layout>
  );
};

export default KaniName;