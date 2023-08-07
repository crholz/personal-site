import Link from 'next/link';
import './Navbar.css'

import CountdownTimer from './CountdownTimer/CountdownTimer';

function Navbar() {

  const WEDDING_DATE = new Date("7 september 2024");
  const NOW_IN_MS = new Date().getTime();

  return (
    <>
      <div className='bg-image'>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link href="/" className='navbar-text'>C+M</Link>
            <ul className='navbar-menu'>
                <li className='navbar-item'>
                    <Link href="/#our-story" className='navbar-item-text'>Our Story</Link>
                </li>
                <li className='navbar-item'>
                    <Link href="/#location" className='navbar-item-text'>Location</Link>
                </li>
                <li className='navbar-item'>
                    <Link href="/#accomodation" className='navbar-item-text'>Accomodation</Link>
                </li>
                <li className='navbar-item'>
                    <Link href="/#faq" className='navbar-item-text'>FAQ</Link>
                </li>
                <li className='navbar-item'>
                    <Link href="/#registry" className='navbar-item-text'>Registry</Link>
                </li>
            </ul>
         </div>
       </nav>
       <div className='content-box'>
         <CountdownTimer targetDate={WEDDING_DATE} />
         <h1 className='header-text'>
            Placeholder Text
         </h1>
         <p className='para-text'>
            Placeholder Text 2
         </p>
       </div>
     </div>
    </>
  )
}

export default Navbar