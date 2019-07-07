import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <a>トップページへ</a>
      </Link>
      <hr />
      <div
        style={{
          minHeight: "300px"
        }}
      >
        {children}
      </div>
      <hr />{" "}
    </div>
  );
};
