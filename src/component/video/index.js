const Video = () => {
  return (
    <section id="video">
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
          <h3 className="small title" data-color="white">
            Watch Our trailer on <span>youtube</span>
          </h3>
        </div>
      </div>

      <div className="container">
        <div className="fn_cs_video">
          <img src="img/video/1.jpg" alt="" />
          <a
            className="popup-youtube"
            href="https://www.youtube.com/watch?v=7e90gBu4pas">
            <img src="svg/play.svg" alt="" className="fn__svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Video;
