import CollectionSlider from "./collectionSlider";
import collectionSVG from "../../assets/svg/claws.svg";
const Collection = () => {
  return (
    <section id="collection">
      <div className="container">
        <div className="fn_cs_title">
          <div className="divider" data-color="2">
            <div className="line"></div>
            <div className="middle"></div>
            <div className="left1"></div>
            <div className="left2"></div>
            <div className="right1"></div>
            <div className="right2"></div>
          </div>
          <h3 className="title" data-color="white">
            From Collection
          </h3>
        </div>
      </div>
      <CollectionSlider />

      <div className="fn_cs_collection_info">
        <div className="container">
          <div className="info_in">
            <h4 className="count">10,000</h4>
            <h3 className="title">Total Items in Collection</h3>
            <p className="fn_animated_text">
              There are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <a href="collection.html" className="metaverse_fn_button white">
              <span className="text">See all</span>
            </a>
          </div>
        </div>
        <img src={collectionSVG} alt="" className="bottom fn__svg" />
      </div>
    </section>
  );
};

export default Collection;
