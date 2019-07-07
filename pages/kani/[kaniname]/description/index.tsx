import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../../../component/Layout";
import { Kani, kanis } from "../../../../data/kanis";
import { useEffect, useState } from "react";
import Link from "next/link";

const KaniDesc: NextPage<{ kani: Kani | undefined }> = ({ kani }) => {
  const router = useRouter();

  const { kaniname } = router.query;

  return (
    <Layout>
      {kani ? (
        <>
          <h1>{kani.name}の説明</h1>
          <hr />
            {kani.description}
            <hr/>
            {kani.tips.map(e=>(
                <li key={e.title}>
                    <Link href={`/kani/${kaniname}/description/${e.title}`}>
                        <a>{e.title}</a>
                    </Link>
                </li>
            ))}
        </>
      ) : (
        <p>{kaniname}なるカニは居ねえ</p>
      )}
    </Layout>
  );
};
KaniDesc.getInitialProps = async ({ query }) => {
  const { kaniname } = query;
  return { kani: kanis.find(e => e.name == kaniname) };
};

export default KaniDesc;
