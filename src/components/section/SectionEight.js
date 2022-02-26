// images

import img_edition from "../../assets/images/img_edition.png";

const SectionEight = () => {
  return (
    <>
      <section className="feature07">
        <div className="inner-box">
          <div className="line-box">
            <span className="line01" />
            <span className="line02" />
            <span className="line03" />
            <span className="line04" />
          </div>
          <div className="skew-box">EDITIONS</div>
          <div className="cont-box">
            <figure>
              <img src={img_edition} alt="" />
            </figure>
            <div className="text">
              <strong>1st Edition</strong>
              <ul>
                <li>
                  <em>폰트명</em>
                  <span>Sandoll 격동고딕 / Sandoll Gyeokdong Gothic</span>
                </li>
                <li>
                  <em>구분</em>
                  <span>고딕</span>
                </li>
                <li>
                  <em>폰트 디자인</em>
                  <span>장수영</span>
                </li>
                <li>
                  <em>글자구성</em>
                  <span>
                    한글 2,350자 / 라틴 95자 / 추가 약물 6자 / 약물 385자 /
                    확장약물 1,277자 / 세로쓰기 197자
                  </span>
                </li>
              </ul>
              <a href="#" className="btn-round">
                Findout more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionEight;
