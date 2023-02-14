import { css } from "@emotion/react";
import { SectionTitle } from "@/components/common/section-title";
import { color } from "@/styles/vars";
import { container } from "@/styles/mixins";
import { notoSansJpMd } from "@/utils/fonts";

export default function Access() {
  return (
    <section css={access}>
      <div css={accessContainer}>
        <SectionTitle jpText="アクセス" enText="Access" />

        <div css={map}>
          <div css={mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.344336858526!2d134.83512491620303!3d34.79727788040992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3555277dd2478e15%3A0xa1c6c978328ea6ff!2sMAHALO%20BENTO%26CAFE!5e0!3m2!1sja!2sjp!4v1673177390033!5m2!1sja!2sjp"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div css={info}>
          <dl>
            <div>
              <dt className={notoSansJpMd.className}>住所</dt>
              <dd>
                〒675-0058 兵庫県加古川市東神吉町天下原370
                <br />
                MAHALO BENTO & CAFE
              </dd>
            </div>
            <div>
              <dt className={notoSansJpMd.className}>営業時間</dt>
              <dd>
                <ul>
                  <li>
                    <span>平日　：</span>
                    <span>11:00 ~ 14:00</span>
                  </li>
                  <li>
                    <span>土日祝：</span>
                    <span>11:00 ~ 15:00</span>
                  </li>
                  <li>
                    <span>定休日：</span>
                    <span>火曜日</span>
                  </li>
                </ul>
              </dd>
            </div>
            <div>
              <dt className={notoSansJpMd.className}>お問い合わせ</dt>
              <dd>
                Tel：<a>080-0000-0000</a>
                <br />
                メールでのご連絡は、当サイトの<a>お問い合わせ</a>
                からお願いします。
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

const access = css`
  padding: 120px 0;
`;

const accessContainer = css`
  ${container};
  max-width: 1000px;
`;

const map = css`
  width: 100%;
  margin-top: 80px;
`;

const mapWrapper = css`
  position: relative;
  width: 100%;
  padding-top: 50%;
  iframe {
    border: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const info = css`
  dl {
    & > div {
      border-bottom: 1px solid #eee;
      padding: 24px 16px;

      dd {
        margin-top: 8px;
        line-height: 1.75;
        letter-spacing: 0.02em;

        a {
          color: ${color.main_v};
          text-decoration: underline;
        }
      }
    }
  }
`;
