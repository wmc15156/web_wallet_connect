import type_card from "../../assets/images/img_type-card.png";
import img_slider from "../../assets/images/img_slider.png";

const SectionOne = () => {
  return (
    <>
      <section className="kv inner-box">
        <div className="text">
          <p className="brush">한글의 아름다움, NFT로 기록되다.</p>
          <span>
            산돌 폰트 기반 <em>TYPO NFT</em>
          </span>
          <strong>TYPY</strong>
          <div className="skew-box">
            <i>03</i> days, <i>20</i>:<i>16</i>:<i>52</i>
          </div>
        </div>
        <div className="type-card">
          <ul>
            <li>
              <img src={type_card} alt="" />
            </li>
            <li className="next" />
          </ul>
          <div className="slider">
            <span>
              <img src={img_slider} alt="" />
            </span>
            <a href="#">전체 보기</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
