import "./FrameComponent2.css";

const FrameComponent = () => {
  return (
    <div className="explore-youre-first-event-parent">
      <h3 className="explore-youre-first1">Explore Youre First Event</h3>
      <div className="event-name-parent">
        <h1 className="event-name1">Event Name</h1>
        <div className="icons-group">
          <img className="icons1" alt="" src="/icons.svg" />
          <img className="icons2" alt="" src="/icons-2.svg" />
          <div className="instance">
            <div className="venue-parent">
              <div className="venue">Venue</div>
              <div className="div2">04/3/2024 @19:00</div>
            </div>
          </div>
        </div>
        <div className="lorem-ipsum-dolor-sit-amet-con-wrapper">
          <div className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. `}</div>
        </div>
      </div>
      <div className="join-now-button-instance-wrapper">
        <img
          className="join-now-button-instance"
          loading="lazy"
          alt=""
          src="/frame-1261154685@2x.png"
        />
      </div>
      <div className="join-now-container">
        <button className="join-now1">
          <b className="join-waitlist1">Join Waitlist</b>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
