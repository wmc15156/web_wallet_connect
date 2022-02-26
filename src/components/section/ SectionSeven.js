//images
import img_sdmtl_logo from "../../assets/images/img_sdmtl-logo.png";

const SectionSeven = () => {
  return (
    <>
      <section className="feature06">
        <div className="inner-box">
          <div className="line-box">
            <span className="line01" />
            <span className="line02" />
            <span className="line03" />
            <span className="line04" />
          </div>
          <h2 className="tit white">SDMTL</h2>
          <div className="desc">
            <p>
              <strong className="color-gr">'Sandoll MetaLab'</strong>은 대한민국{" "}
              <strong>No.1 폰트 기업 산돌이 만든 기술 전문회사</strong>입니다.
              <i className="br">
                <strong>산돌메타랩</strong>은 인공지능과 블록체인이 가져올
                디지털 콘텐츠들의 다양한 변화와 발전에 맞춘
              </i>
              기술을 연구하고 중점적으로{" "}
              <strong className="color-gr">TYPY</strong> 서비스를 개발하고
              있습니다.
            </p>
            <p>
              그동안 축적해온 본사의 방대한 데이터와 지식재산권을 기반으로 IT
              기술을 활용해
              <i className="br">
                디지털 콘텐츠의 제작자부터 소비자까지 새롭고 다양한 서비스를
                제공하고
              </i>
              디지털 콘텐츠의 본질적 가치를 올리는 기술을 연구합니다.
            </p>
          </div>
          <figure>
            <span>
              <img src={img_sdmtl_logo} alt="" />
            </span>
          </figure>
          <div className="graph">
            <p className="text01 text-r">
              블록체인 생태계를 이해하고
              <strong className="br">블록체인을 활용한 서비스 개발 진행</strong>
            </p>
            <p className="text02 text-r">
              <strong className="br">NFT를 활용한</strong>콘텐츠 제작 및 거래
              기술 연구 개발
            </p>
            <p className="text03">
              <i className="br">Solidity, web3.js 등 기술력 보유,</i>
              <strong>다양한 형태의 Dapp</strong> 연구 개발
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSeven;
