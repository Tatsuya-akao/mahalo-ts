import { css } from "@emotion/react";
import { rgba } from "emotion-rgba";
import { MenuListItem } from "@/types/menu";
import Link from "next/link";
import Image from "next/image";
import { color } from "@/styles/vars";
import { notoSansJpMd } from "@/utils/fonts";

export default function MenuItem({ menuData }: { menuData: MenuListItem }) {
  const { name, text, imageUrl, url } = menuData;

  return (
    <li css={item}>
      <Link href={url} css={link}>
        <div css={thumb}>
          <Image src={imageUrl} alt={name} fill />
        </div>
        <div css={info}>
          <div css={infoInner}>
            <h3 css={title} className={notoSansJpMd.className}>
              {name}
            </h3>
            <p css={paragraph}>{text}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

const item = css``;

const link = css`
  display: flex;
  width: 100%;
  border-radius: 10px;
  margin-top: 64px;
  overflow: hidden;
  box-shadow: 0 3px 10px ${rgba(color.black, 0.08)};
  background-color: ${color.white};
  transition: all 0.3s;

  &:hover {
    box-shadow: none;
    transform: translateY(3px);
  }
`;

const thumb = css`
  position: relative;
  width: 40%;
  flex-shrink: 0;
  height: 300px;

  img {
    object-fit: cover;
  }
`;

const info = css`
  display: flex;
  justify-content: center;
  padding: 32px 56px;
  flex-grow: 1;
`;

const infoInner = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  width: 100%;
`;

const title = css`
  color: ${color.main_v};
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.05em;
`;

const paragraph = css`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 1.75;
  margin-top: 16px;
`;
