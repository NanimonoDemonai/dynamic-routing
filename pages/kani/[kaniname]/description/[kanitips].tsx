import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../../../component/Layout";
import { Kani, kanis } from "../../../../data/kanis";
import { FC } from "react";

const KaniFactFind: FC<{ kani: Kani; kanitips: string }> = ({
  kani,
  kanitips
}) => {
  const kanitipsFind = kani.tips.find(e => e.title == kanitips);
  if (kanitipsFind) return <p> {kanitipsFind.content}</p>;
  return <p>知らん</p>;
};

const KaniTips: NextPage<{ kani: Kani }> = ({ kani }) => {
  const router = useRouter();
  const { kaniname, kanitips } = router.query;
  return (
    <Layout>
      {kani ? (
        <>
          <h1>
            {kani.name}の{kanitips}
          </h1>
          <hr />
          <KaniFactFind kani={kani} kanitips={kanitips} />
        </>
      ) : (
        <p>{kaniname}なる奴は知らん</p>
      )}
    </Layout>
  );
};
KaniTips.getInitialProps = async ({ query }) => {
  const { kaniname } = query;
  return { kani: kanis.find(e => e.name == kaniname) };
};
export default KaniTips;
