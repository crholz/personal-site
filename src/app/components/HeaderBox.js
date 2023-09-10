import CountdownTimer from "./CountdownTimer/CountdownTimer";
import './HeaderBox.css'

function HeaderBox() {

  const WEDDING_DATE = new Date("7 september 2024");
  const NOW_IN_MS = new Date().getTime();

  return (
    <>
      <div className="header-img">
        <div className="content-box">
          <h1 className="header-text">Corbin and Mykenzie</h1>
          <h1 className="header-text">09/07/2024</h1>
          <CountdownTimer targetDate={WEDDING_DATE} />
          {/*<p className="para-text">RSVP Will be Available Here in the Future.</p>*/}
        </div>
      </div>
    </>
  );
}

export default HeaderBox;
