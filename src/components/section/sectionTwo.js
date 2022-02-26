const SectionTwo = () => {
  return (
    <>
      <section className="feature01">
        <div className="inner-box">
          <div className="line-box">
            <span className="line01" />
            <span className="line02" />
            <span className="line03" />
            <span className="line04" />
          </div>
          <h2 className="tit white">TYPY는</h2>
          <div className="desc">
            <p>
              세상의 모든 소리를 나타낼 수 있는 표음 문자{" "}
              <strong>
                "한글"의
                <br />
                자,모음을 NFT화
              </strong>{" "}
              하여 모든 사용자에게
              <br />
              단어와 문장을 만드는 즐거움과 가치를 주는 프로젝트입니다.
            </p>
            <p>
              사용자는 대한민국 No.1 폰트 기업인 <strong>Sandoll</strong>의 여러
              <br />
              아름다운 폰트를 <span className="color-gr">TYPY</span>를 통해
              <br />
              각각의 <strong>NFT EDITIONS으로 만날 수 있습니다.</strong>
            </p>
          </div>
          <div className="desc02">
            <span>
              여러 개의 자음과 모음 NFT를 조합하여 유니크한 단어를 만들어
              보세요.{" "}
              <i className="br">
                높은 Rarity를 가진 단어를 조합하면 다양한 혜택을 받을 수
                있습니다.
              </i>
            </span>
            <span>
              단어를 잘못 조합했거나, 조합된 단어가 마음에 들지 않을 땐 언제든
              분해하여 다른 단어를 만들 수도 있습니다.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
