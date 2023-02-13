import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { global } from "@/styles/global";
import { notoSansJp } from "@/utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSansJp.style.fontFamily};
        }
      `}</style>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
