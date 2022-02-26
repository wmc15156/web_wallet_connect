import img_nft01 from "../../assets/images/img_letter-nft01.png";
import img_nft02 from "../../assets/images/img_letter-nft02.png";
import img_nft03 from "../../assets/images/img_letter-nft03.png";

const SectionSix = () => {
  return (
    <>
      <section className="feature05">
        <div className="inner-box">
          <div className="line-box">
            <span className="line01" />
            <span className="line02" />
            <span className="line03" />
            <span className="line04" />
          </div>
          <h2 className="tit">HOLDER BENEFITS</h2>
          <div className="desc">
            <p>
              <strong>TYPY</strong>의 자모음 NFT를 모을 수록 받을 수 있는 혜택이
              늘어납니다.
            </p>
            <p>
              또한 자모음 NFT를 조합하여 특정 단어를 만들면 해당 단어가 속한{" "}
              <strong>카테고리 커뮤니티</strong>에
              <i className="br">가입할 수 있는 권한을 부여 받습니다.</i>
            </p>
            <p>
              단어 NFT 보유를 통해 특정 커뮤니티에 가입하여 관심사가 통하는
              유저들과 깊게 소통하고
              <i className="br">
                해당 커뮤니티에만 주어지는 <strong>독점 정보</strong>를 제공
                받으세요.
              </i>
            </p>
          </div>
          <div className="cont-box cont01">
            <div className="skew-box">CONSONANT and VOWEL NFT</div>
            <ul>
              <li>
                <div>
                  <span>10 TYPYs</span>
                  <div className="squre-round">열</div>
                </div>
                <strong>Author</strong>
                <p>
                  <i className="br">
                    <em className="highlighter">1 random</em> airdrop
                  </i>{" "}
                  in every editions
                </p>
              </li>
              <li>
                <div>
                  <span>20 TYPYs</span>
                  <div className="squre-round">스</div>
                  <div className="squre-round">물</div>
                </div>
                <strong>Super Author</strong>
                <p>
                  <i className="br">
                    <em className="highlighter">4 random</em> airdrop
                  </i>{" "}
                  in every editions
                </p>
              </li>
              <li>
                <div>
                  <span>40 TYPYs</span>
                  <div className="squre-round">마</div>
                  <div className="squre-round">흔</div>
                </div>
                <strong>Leader</strong>
                <p>
                  <i className="br">
                    <em className="highlighter">12 random</em> airdrop
                  </i>{" "}
                  in every editions
                </p>
              </li>
              <li>
                <div>
                  <span>80 TYPYs</span>
                  <div className="squre-round">여</div>
                  <div className="squre-round">든</div>
                </div>
                <strong>King of Author</strong>
                <p>
                  <i className="br">
                    <em className="highlighter">20 random</em> airdrop
                  </i>{" "}
                  in every editions <i className="br">+</i>
                  <i className="br">Join</i>OG Community
                </p>
              </li>
              <li>
                <div>
                  <span>100 TYPYs</span>
                  <div className="squre-round">백</div>
                </div>
                <strong>God of Author</strong>
                <p>
                  <i className="br">
                    <em className="highlighter">30 random</em> airdrop
                  </i>{" "}
                  in every editions <i className="br">+</i>
                  <i className="br">Join</i>OG Community
                </p>
              </li>
            </ul>
          </div>
          <div className="cont-box cont02">
            <div className="skew-box">LETTER NFT</div>
            <ul>
              <li>
                <figure>
                  <img src={img_nft01} alt="" />
                </figure>
                <p>
                  <i className="br">JOIN</i>
                  <em className="highlighter">#CRYPTO</em>_EXCLUSIVE
                </p>
              </li>
              <li>
                <figure>
                  <img src={img_nft02} alt="" />
                </figure>
                <p>
                  <i className="br">JOIN</i>
                  <em className="highlighter">#KPOP</em>_EXCLUSIVE
                </p>
              </li>
              <li>
                <figure>
                  <img src={img_nft03} alt="" />
                </figure>
                <p>
                  <i className="br">JOIN</i>
                  <em className="highlighter">#SANDOLL</em>_EXCLUSIVE
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSix;
