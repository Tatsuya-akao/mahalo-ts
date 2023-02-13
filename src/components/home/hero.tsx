import { css } from "@emotion/react";
import { color } from "@/styles/vars";
import { ooohBaby } from "@/utils/fonts";
import { notoSansJp } from "@/utils/fonts";

export default function Hero() {
  return (
    <div css={hero}>
      <div css={heroInner}>
        <div css={heroBox}>
          <h1>
            <span>BENTO & CAFE</span>
            <span>MAHALO</span>
          </h1>
          <p className={notoSansJp.className}>
            MAHALOは、加古川市ウェルネスパーク内のカフェ &
            レストランです。日替わりランチ定食やコーヒーなどご用意しておりますので、ぜひお越しください。
          </p>
        </div>
        <p css={heroMessage} className={ooohBaby.className}>
          Welcome To
          <br /> Mahalo!
        </p>
      </div>
    </div>
  );
}

const hero = css`
  position: relative;
  height: 100vh;
  max-height: 70vmax;
  min-height: 720px;
  padding: 100px 8vw 0 0;
  margin-bottom: 8vw;
`;

const heroInner = css`
  position: relative;
  background-image: url("/images/home/mv-cover.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  animation: bg 8s linear infinite;

  @keyframes bg {
    0% {
      background-size: 100% 100%;
    }

    100% {
      background-size: 120% 120%;
    }
  }
`;

const heroBox = css`
  position: absolute;
  right: -32px;
  bottom: -32px;
  background-color: ${color.main};
  color: ${color.white};
  z-index: 1;
  padding: 48px 32px;
  max-width: 600px;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      &:first-of-type {
        font-size: 14px;
        letter-spacing: 0.2em;
        font-family: "Roboto";
        font-weight: 400;
      }

      &:last-of-type {
        font-size: 36px;
        font-family: "Archivo Black";
        letter-spacing: 0.1em;
      }
    }
  }

  p {
    font-size: 14px;
    line-height: 2;
    margin-top: 16px;
    max-width: 400px;
  }
`;

const heroMessage = css`
  /* font-family: $font-cursive; */
  font-size: 200px;
  font-weight: 400;
  color: ${color.main_v};
  z-index: 1;
  transform: rotate(-15deg) translate(-14%, 0%);
  text-shadow: 3px 3px #fff;
`;
