import AboutUsIMG from "../../assets/images/nft/aboutusIMG.png";
import ClawsSVG from "../../assets/svg/claws.svg";
import FolderSVG from "../../assets/svg/folded.svg";
const Collection = () => {
  return (
    <section id="about" className="">
      <div className="container">
        <div className="fn_cs_title">
          <div className="divider" data-color="1">
            <div className="line"></div>
            <div className="middle"></div>
            <div className="left1"></div>
            <div className="left2"></div>
            <div className="right1"></div>
            <div className="right2"></div>
          </div>
          <h3 className="title" data-color="black">
            About Us
          </h3>
        </div>
      </div>

      <div className="container">
        <div className="fn_row">
          <div className="fn_col2">
            <p className="font-light small text-black">
              There are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className="fn_col2">
            <p className="font-light small text-black">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="about_img flex justify-center w-full">
        <img src={AboutUsIMG} alt="" width="1300px" />
        <img src={ClawsSVG} alt="" className="fn__svg top" />
        <img src={FolderSVG} alt="" className="bottom fn__svg" />
      </div>
    </section>
  );
};

export default Collection;
