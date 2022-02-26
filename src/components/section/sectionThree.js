// images
import intro01 from "../../assets/images/img_intro01.png";
import intro02 from "../../assets/images/img_intro02.png";

import intro03 from "../../assets/images/img_intro03.png";

const SectionThree = () => {
  return (
    <>
      <section className="feature02">
        <div className="inner-box">
          <div className="line-box">
            <span className="line01" />
            <span className="line02" />
            <span className="line03" />
            <span className="line04" />
          </div>
          <ul>
            <li>
              <img src={intro01} alt="" />
              <p>
                <i className="br">한국 No.1 폰트기업</i>{" "}
                <strong>Sandoll</strong>의 폰트 사용
              </p>
            </li>
            <li>
              <img src={intro02} alt="" />
              <p>
                <strong>자음, 모음 NFT</strong>의{" "}
                <i className="br">자유로운 조합과 분해</i>
              </p>
            </li>
            <li>
              <img src={intro03} alt="" />
              <p>
                <strong>높은 Rarity의 NFT</strong> 보유자{" "}
                <i className="br">각종 혜택 부여</i>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
