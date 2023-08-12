import CountdownTimer from "./CountdownTimer/CountdownTimer";
import './HeaderBox.css'

function HeaderBox() {

  const WEDDING_DATE = new Date("7 september 2024");
  const NOW_IN_MS = new Date().getTime();

  return (
    <>
      <div className="header-img">
        <div className="content-box">
          <h1 className="header-text">09/07/2024</h1>
          <CountdownTimer targetDate={WEDDING_DATE} />
          <h1 className="header-text">Placeholder Text</h1>
          <p className="para-text">Placeholder Text 2</p>
        </div>
      </div>
    </>
  );
}

export default HeaderBox;
