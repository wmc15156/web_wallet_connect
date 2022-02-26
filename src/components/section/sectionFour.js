import {
  firstConsonant,
  firstVowel,
  secondConsonant,
  secondVowel,
  thirdConsonant,
  thirdVowel,
} from "./constants";
import { gnbLists } from "../Header/constants";

const SectionFour = () => {
  return (
    <>
      <section className="feature03">
        <div className="inner-box">
          <div className="line-box">
            <span className="line01" />
            <span className="line02" />
            <span className="line03" />
            <span className="line04" />
          </div>
          <h2 className="tit">RARITIES</h2>
          <div className="desc">
            <p>
              <strong>TYPY</strong>의 자모음 NFT에는 Common, Rare 같은 등급이
              부여되지 않습니다.{" "}
              <i className="br">
                그러나, 각 요소들의 출현 확률이 각각 다르게 부여되어 있습니다.
              </i>
              <p>희소한 자모음을 모아 나만의 특별한 단어를 만들어 보세요.</p>
            </p>
          </div>
          <div className="list-consonant">
            <ul>
              {firstConsonant.map((item, i) => (
                <li key={i}>
                  <div className={item.className}>{item.text}</div>
                  <span className={item.spanClassName}>{item.rarity}</span>
                </li>
              ))}
            </ul>
            <ul>
              {secondConsonant.map((item, i) => (
                <li key={i}>
                  <div className={item.className}>{item.text}</div>
                  <span>{item.rarity}</span>
                </li>
              ))}
            </ul>
            <ul>
              {thirdConsonant.map((item, i) => (
                <li key={i}>
                  <div className={item.className}>{item.text}</div>
                  <span>{item.rarity}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="list-vowel">
            <ul>
              {firstVowel.map((item, i) => (
                <li key={i}>
                  <div className={item.className}>{item.text}</div>
                  <span className={item.spanClassName}>{item.rarity}</span>
                </li>
              ))}
            </ul>
            <ul>
              {secondVowel.map((item, i) => (
                <li key={i}>
                  <div className={item.className}>{item.text}</div>
                  <span>{item.rarity}</span>
                </li>
              ))}
            </ul>
            <ul>
              {thirdVowel.map((item, i) => (
                <li key={i}>
                  <div className={item.className}>{item.text}</div>
                  <span>{item.rarity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
