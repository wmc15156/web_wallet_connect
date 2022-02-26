import styled from "styled-components";

import { gnbLists } from "./constants";

// images
import close_btn from "../../assets/images/btn_menu-close.png";
import { useState } from "react";

const MobileNavContainer = styled.div`
  .mobile-nav {
    right: ${(props) => (props.click ? "0px" : "-100%")};
    transition: all 0.25s;
  }
`;

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const onRemovePopup = () => {
    const content = document.querySelector("#contents");
    const html = document.querySelector("html");
    content.classList.remove("dim");
    html.classList.remove("nav-open");
    setIsClick(false);
  };

  const openMenu = () => {
    const content = document.querySelector("#contents");
    const html = document.querySelector("html");

    content.setAttribute("class", "dim");
    html.setAttribute("class", "nav-open");
    setIsClick(!isClick);
  };

  return (
    <>
      <header>
        <section className="header-inner">
          {/*<h1>*/}
          {/*  <a>TYPY logo</a>*/}
          {/*</h1>*/}
          <div>
            <nav>
              <ul className="gnb">
                {gnbLists.map((item, i) => (
                  <li key={i}>
                    <a>{item.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href="#" target="_blank" className="btn-round">
              Connect Wallet
            </a>
          </div>
        </section>
      </header>
      <button className="btn-menu" onClick={openMenu}>
        button
      </button>
      <MobileNavContainer click={isClick}>
        <div className="mobile-nav">
          <a href="#" className="close" onClick={onRemovePopup}>
            <img src={close_btn} alt="" />
          </a>
          <div className="gnb-list">
            <ul className="gnb">
              {gnbLists.map((item, i) => (
                <li key={i}>
                  <a>{item.text}</a>
                </li>
              ))}
            </ul>
            <a href="#" target="_blank" className="btn-round">
              Connect Wallet
            </a>
          </div>
        </div>
      </MobileNavContainer>
    </>
  );
};

export default Header;
