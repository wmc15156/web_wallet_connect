// images
import img_combination from "../../assets/images/img_combination.png";
import img_combination_m from "../../assets/images/img_combination-m.png";
import img_decomponant from "../../assets/images/img_decomponant.png";
import img_decomponant_m from "../../assets/images/img_combination-m.png";

const SectionFive = () => {
  return (
    <>
      <section className="feature04">
        <div className="inner-box">
          <div className="line-box">
            <span className="line01" />
            <span className="line02" />
            <span className="line03" />
            <span className="line04" />
          </div>
          <h2 className="tit white">
            COMBINATIONS <i>and DECOMPONANTS</i>
          </h2>
          <div className="desc">
            <p>
              자모음 NFT를 모아 만들고 싶은 단어로 재탄생시킬 수 있습니다.{" "}
              <i className="br">
                또한 그 단어를 원하지 않을 땐 언제든 분해할 수 있습니다.
              </i>
            </p>
            <p>
              <strong className="color-gr">TYPY</strong>의 공식 커뮤니티에서
              시즌에 따라 각각 다른 카테고리가 제시되며,{" "}
              <i className="br">
                그 안에서 공개되지 않은 특정 단어들이 각각의 Rarity를
                부여받습니다.
              </i>
            </p>
          </div>
          <figure>
            <span className="pc">
              <img src={img_combination} alt="" />
            </span>
            <span className="mobile">
              <img src={img_combination_m} alt="" />
            </span>
          </figure>
          <figure>
            <span className="pc">
              <img src={img_decomponant} alt="" />
            </span>
            <span className="mobile">
              <img src={img_decomponant_m} alt="" />
            </span>
          </figure>
        </div>
      </section>
    </>
  );
};

export default SectionFive;
