import "./WelcomeBanner.css";

import Image from "next/image";

function WelcomeBanner() {
  return (
    <>
      <div className="welcome-banner-div">
        <div className="divbar-top"><hr className="divline"/></div>
        <ul className="welcome-content">
            <li className="deco-boquet"><img src="/images/flowers-boquet.png" className="boquet-img" /> </li>
            <li className="welcome-text">Welcome to our wedding website! Find all the details for our big day below! If you have any questions don&apos;t hesitate to reach out to either of us with any questions!</li>
            <li className="deco-boquet"><img src="/images/flowers-boquet.png" className="boquet-img" /> </li>
        </ul>
        <div className="divbar-bottom"><hr className="divline"/></div>
      </div>
    </>
  );
}

export default WelcomeBanner;
