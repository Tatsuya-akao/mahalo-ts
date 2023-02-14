import { css } from "@emotion/react";
import { color } from "@/styles/vars";
import Link from "next/link";
import { ReactNode } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

export default function LinkButton({ children, href, className }: Props) {
  return (
    <Link href={href} css={btn} className={className}>
      <span css={text}>{children}</span>
      <MdKeyboardArrowRight css={arrow} />
    </Link>
  );
}

const btn = css`
  width: 100%;
  height: 100%;
  position: relative;
  border: 2px solid ${color.main_v};
  background-color: ${color.main_v};
  color: ${color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${color.white};
    position: absolute;
    left: 0;
    top: 0;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${color.main_v};

    &::before {
      transform: scaleX(1);
    }
  }
`;

const text = css`
  position: relative;
  transition: all 0.3s;
`;

const arrow = css`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  font-size: 22px;
  transition: all 0.3s;
`;
