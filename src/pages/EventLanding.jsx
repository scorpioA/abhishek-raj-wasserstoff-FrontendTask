import { useCallback } from "react";
import AstrixBrandingInstance from "../components/AstrixBrandingInstance";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent11";
import FrameComponent from "../components/FrameComponent2";
import "./EventLanding.css";

const EventLanding = () => {
  const navigate = useNavigate();

  const onEventsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="event-landing">
      <h1 className="astrix-events">
        <span className="astrix-events-txt-container">
          <p className="astrix1">ASTRIX</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="events2">EVENTS</p>
        </span>
      </h1>
      <div className="event-landing-inner">
        <div className="frame-container">
          <AstrixBrandingInstance
            astrixBranding="/astrix-branding1@2x.png"
            propWidth="197px"
            propPadding="unset"
          />
          <div className="frame-div">
            <div className="events-container">
              <div className="events3">
                <div className="events-inner">
                  <img
                    className="frame-icon"
                    alt=""
                    src="/frame-12611546701@2x.png"
                  />
                </div>
                <div className="image-13-parent">
                  <img
                    className="image-13-icon"
                    alt=""
                    src="/image-13@2x.png"
                  />
                  <h1 className="event-name">Event Name</h1>
                  <div className="icons-parent">
                    <img
                      className="icons"
                      loading="lazy"
                      alt=""
                      src="/icons.svg"
                    />
                    <div className="location">Location</div>
                  </div>
                </div>
                <div className="events-inner1">
                  <img
                    className="frame-child1"
                    alt=""
                    src="/empowering-minds-with-tech-and-products@2x.png"
                  />
                </div>
                <img
                  className="events-item"
                  loading="lazy"
                  alt=""
                  src="/frame-1261154671-1@2x.png"
                />
              </div>
            </div>
            <div className="toggle-landing-page1">
              <div className="rectangle-group">
                <div className="rectangle-div" />
                <div className="frame-child2" />
                <b className="events4" onClick={onEventsTextClick}>
                  Events
                </b>
                <b className="collections1">Collections</b>
              </div>
              <div
                className="toggle-landing-page-item"
                onClick={onFrameClick}
              />
            </div>
          </div>
        </div>
      </div>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default EventLanding;
