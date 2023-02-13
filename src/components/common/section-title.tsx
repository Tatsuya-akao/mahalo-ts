import { notoSansJpBold } from "@/utils/fonts";
import { css } from "@emotion/react";
import { color } from "@/styles/vars";

type OwnProps<E extends React.ElementType> = {
  jpText: string;
  enText: string;
  as?: E;
};

type Props<E extends React.ElementType> = OwnProps<E> &
  Omit<React.ComponentProps<E>, keyof OwnProps<E>>;

export const SectionTitle = <E extends React.ElementType = "h2">({
  jpText,
  enText,
  as,
}: Props<E>) => {
  const TagName = as || "h2";

  return (
    <TagName css={title}>
      <span className={notoSansJpBold.className}>{jpText}</span>
      <span>{enText}</span>
    </TagName>
  );
};

const title = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${color.main_v};

  span {
    &:first-of-type {
      font-size: 32px;
    }

    &:last-of-type {
      font-size: 16px;
      letter-spacing: 0.1em;
    }
  }
`;
