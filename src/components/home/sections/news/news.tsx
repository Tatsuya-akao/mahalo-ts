import { css } from "@emotion/react";
import { rgba } from "emotion-rgba";
import { color } from "@/styles/vars";
import { container } from "@/styles/mixins";
import { SectionTitle } from "../../../common/section-title";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/common/link-button";
import { Article } from "@/types/article";
import { formatDate } from "@/utils/date";
import { notoSansJpMd } from "@/utils/fonts";
import { HiArrowRight } from "react-icons/hi";

export default function News({ articles }: { articles: Article[] }) {
  return (
    <section css={news}>
      <div css={newsContainer}>
        <SectionTitle jpText="お知らせ" enText="News" />

        <div css={box}>
          <Image
            src="/images/home/illust_01.svg"
            width={180}
            height={180}
            css={illust_01}
            alt="イラスト"
          />

          <Image
            src="/images/home/illust_02.svg"
            width={140}
            height={200}
            css={illust_02}
            alt="イラスト"
          />

          <ul css={list}>
            {articles.map((article) => {
              const {
                _id,
                slug,
                title,
                _sys: {
                  raw: { publishedAt },
                },
              } = article;
              const date: Date = new Date(publishedAt);

              return (
                <li key={_id} css={item}>
                  <Link href={`news/${slug}`} css={link}>
                    <time css={time} className={notoSansJpMd.className}>
                      {formatDate(date)}
                    </time>
                    <span
                      css={item_title}
                      className={`news-item-title ${notoSansJpMd.className}`}
                    >
                      {title}
                    </span>
                    <span css={arrow} className="news-item-arrow">
                      <HiArrowRight />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div css={btn}>
            <LinkButton href="/news" className={notoSansJpMd.className}>
              もっと見る
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const news = css`
  position: relative;
  padding: 120px 0;
  max-width: 1440px;
  margin: 0 8vw 8vw;
`;

const newsContainer = css`
  ${container};
`;

const box = css`
  max-width: 840px;
  width: 100%;
  margin: 56px auto 0;
`;

const illust_01 = css`
  position: absolute;
  left: -60px;
  top: -20px;
`;

const illust_02 = css`
  position: absolute;
  right: -20px;
  bottom: -20px;
  transform: rotate(15deg);
`;

const list = css`
  box-shadow: 0 3px 20px ${rgba(color.main_v, 0.08)};
  border-radius: 10px;
  padding: 16px;
`;

const item = css`
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #eee;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  &:first-of-type {
    &::before {
      display: none;
    }
  }
`;

const time = css`
  font-size: 15px;
  font-weight: 500;
  color: ${color.main_v};
  letter-spacing: 0.05em;
`;

const arrow = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  font-size: 20px;
  transition: all 0.3s;
  color: ${color.main_v};
`;

const item_title = css`
  font-weight: bold;
  letter-spacing: 0.05em;
  margin-top: 12px;
  transition: color 0.3s;
`;

const link = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 24px 80px 24px 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${rgba(color.main_v, 0.04)};

    .news-item-title {
      color: ${color.main_v};
    }

    .news-item-arrow {
      transform: translate(6px, -50%);
    }
  }
`;

const btn = css`
  width: 280px;
  height: 56px;
  margin: 64px auto 0;
`;
