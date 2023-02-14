import { css } from "@emotion/react";
import { SectionTitle } from "../../../common/section-title";
import { color } from "@/styles/vars";
import { rgba } from "emotion-rgba";
import { container } from "@/styles/mixins";
import MenuList from "./menu-list";
import LinkButton from "@/components/common/link-button";
import { notoSansJpMd } from "@/utils/fonts";

export default function Menu() {
  return (
    <section css={menu}>
      <div css={menuContainer}>
        <SectionTitle jpText="メニュー" enText="Menu" />
        <MenuList />
        <div css={btn}>
          <LinkButton href="/news" className={notoSansJpMd.className}>
            メニュー一覧を見る
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

const menu = css`
  background-color: ${rgba(color.main_v, 0.04)};
  padding: 120px 0;
`;

const menuContainer = css`
  ${container};
`;

const btn = css`
  width: 280px;
  height: 56px;
  margin: 64px auto 0;
`;
