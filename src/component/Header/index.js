// import { useEffect } from "react";
// import { useWeb3React } from "@web3-react/core";
// import { injected } from "../../hooks/connect";
// import { switchSongbirdNetwork } from "../../hooks/switch-network";

// import { FaWallet } from "react-icons/fa";

import LogoImg from "../../assets/images/icon/logoIMG.jpg";
import Slider from "../slider";
import About from "../about";
import Video from "../video";
import Collection from "../collection";
import Team from "../team";
import Faq from "../faq";

export default function Header() {
  // const { account, chainId, activate, deactivate } = useWeb3React();

  // async function connect() {
  //   if (chainId !== 16 || chainId === undefined) {
  //     switchSongbirdNetwork();
  //   }
  //   try {
  //     console.log("clicked");
  //     await activate(injected);
  //     localStorage.setItem("isWalletConnected", true);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // }

  // async function disconnect() {
  //   try {
  //     deactivate();
  //     localStorage.setItem("isWalletConnected", false);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // }

  // useEffect(() => {
  //   const connectWalletOnPageLoad = async () => {
  //     if (localStorage?.getItem("isWalletConnected") === "true") {
  //       try {
  //         await activate(injected);
  //         localStorage.setItem("isWalletConnected", true);
  //       } catch (ex) {
  //         console.log(ex);
  //       }
  //     }
  //   };
  //   connectWalletOnPageLoad();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <header id="header">
        <div className="border-gray-300 header">
          <div className="header_in">
            <div className="logo">
              <a className="has_text" href="index.html">
                <img
                  src={LogoImg}
                  alt=""
                  width="50px"
                  className="m-1 rounded-full"
                />
                <h1 className="font-bold hidden mx-1 sm:block text-xl uppercas">
                  DoodleBunny
                </h1>
              </a>
            </div>
            <div className="nav">
              <ul>
                <li className="menu-item-has-children">
                  <a className="gradient_link" href="#home">
                    <span>Home</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">
                        <span className="creative_link">Sliced Slider</span>
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <span className="creative_link">Full Slider</span>
                      </a>
                    </li>
                    <li>
                      <a href="index-3.html">
                        <span className="creative_link">Cards Carousel</span>
                      </a>
                    </li>
                    <li>
                      <a href="index-4.html">
                        <span className="creative_link">3D Carousel</span>
                      </a>
                    </li>
                    <li>
                      <a href="index-5.html">
                        <span className="creative_link">ZigZag Carousel</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="gradient_link" href="#about">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a className="gradient_link" href="#collection">
                    <span>Collection</span>
                  </a>
                </li>
                <li>
                  <a className="gradient_link" href="#team">
                    <span>Team</span>
                  </a>
                </li>
                <li>
                  <a className="gradient_link" href="#contact">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="helpful">
              <button className="block md:hidden trigger">
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* <section id="cards_slider">
        <div className="section_content">
          <div className="slider_top">
            <div className="slider_content">
              <div className="container">
                <div className="fn_cs_welcome">
                  <h3 className="maintitle">CyberBrokers Collection</h3>
                  <div className="buttons">
                    <a href="#" className="metaverse_fn_button">
                      <span className="text">Mint Now</span>
                    </a>
                    <a href="#" className="metaverse_fn_button white">
                      <span className="text">Whitelist Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="frenify_cards_gallery"
            data-initial-width="540"
            data-ratio="0.925">
            <ul>
              <li>
                <div className="img_holder">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="o_img" data-bg-img={LogoImg}></div>
                    <img src={LogoImg} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="img_holder">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="o_img" data-bg-img={LogoImg}></div>
                    <img src={LogoImg} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="img_holder">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="o_img" data-bg-img={LogoImg}></div>
                    <img src={LogoImg} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="img_holder">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="o_img" data-bg-img={LogoImg}></div>
                    <img src={LogoImg} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="img_holder">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="o_img" data-bg-img={LogoImg}></div>
                    <img src={LogoImg} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="img_holder">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="o_img" data-bg-img="img/slider/6.png"></div>
                    <img src="img/1x1.jpg" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="img_holder">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="o_img" data-bg-img="img/slider/7.png"></div>
                    <img src="img/1x1.jpg" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="img_holder">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="o_img" data-bg-img="img/slider/8.png"></div>
                    <img src="img/1x1.jpg" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="section_divider">
          <img src="svg/mountain.svg" alt="" className="fn__svg" />
        </div>
      </section> */}
      <Slider />
      <About />
      <Video />
      <Collection />
      <Team />
      <Faq />
    </>
  );
}
