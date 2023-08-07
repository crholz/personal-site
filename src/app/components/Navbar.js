import Link from 'next/link';
import './Navbar.css'

function Navbar() {

  return (
    <>
      <div className='bg-image'>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link href="/" className='navbar-text'>C+M</Link>
            <ul className='navbar-menu'>
                <li className='navbar-item'>
                    <Link href="/#story" className='navbar-item-text'>Our Story</Link>
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
     </div>
    </>
  )
}

export default Navbar