// images
import img_sns01 from "../../assets/images/ico_sns01.png";
import img_sns02 from "../../assets/images/ico_sns02.png";
import img_sns03 from "../../assets/images/ico_sns03.png";
import img_sns04 from "../../assets/images/ico_sns04.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="inner-box">
          <div className="line-box">
            <span className="line01" />
            <span className="line02" />
            <span className="line03" />
            <span className="line04" />
          </div>
          <strong>OFFICIAL COMMUNITIES</strong>
          <ul>
            <li>
              <a href="#">
                <img src={img_sns01} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={img_sns02} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={img_sns03} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={img_sns04} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <p className="copy">©2022 SANDOLL METALAB. All rights reserved. </p>
      </footer>
    </>
  );
};

export default Footer;
