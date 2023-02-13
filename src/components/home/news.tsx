import { css } from "@emotion/react";
import { container } from "@/styles/mixins";
import { SectionTitle } from "../common/section-title";

export default function News() {
  return (
    <section css={news}>
      <div css={newsContainer}>
        <SectionTitle jpText="お知らせ" enText="News" />
      </div>
    </section>
  );
}

const news = css`
  padding: 120px 0;
  max-width: 1440px;
  margin: 0 8vw 8vw;
`;

const newsContainer = css`
  ${container};
`;

const news_title = css``;
