import './ContentPage.css'

function ContentPage() {
  return (
    <>
    <div className='content-page-box'>
      <div className='text-item'>
        <div id="our-story" className="our-story">
          <h1 className="our-story-head">Our Story</h1>
          <p className='our-story-p'>We met as engineering students, and our connection grew stronger through shared laughter and late-night studies. After earning our degrees, we ventured to Rochester, Minnesota, where our bond deepened amid career challenges. Now, we&apos;re excited to take the next step in our journey surrounded by loved ones. Join us in celebrating our story of love, commitment, and growth.</p>
          <p className='our-story-sign'>With Love,</p>
          <p className='our-story-signature'>Mykenzie & Corbin</p>
        </div>
      </div>
      <div className='text-item'>
        <div id="details" className="details">
          <h1 className="details-head">Details</h1>
          <p className='location-text'>Location</p>
          <p className='location-name'>Belsolda Farms</p>
          <p className='location-addr'>488 Mangum Rd</p>
          <p className='location-city'>Marquette, MI, 49855</p>
          <p className='details-p'>Getting to the venue: If you are coming from Marquette head down US 41 until you reach Magnum Road, which is on the left right after GT Sales. You will follow this road for about 5 minutes where you should see the barn on your right. There will be signs to show where to park.</p>
          <div className='google-map'>
            <iframe className='google-map-item' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10994.288144605103!2d-87.2771072!3d46.4571762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4e185b3d01a50f%3A0xd192a5143d6f30d6!2sBelsolda%20farm!5e0!3m2!1sen!2sus!4v1692237051816!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className='text-item'>
        <div id="wedding-party" className="wedding-party">
          <h1 className="wedding-party-head">Wedding Party</h1>
          <ul className='wedding-party-list'>
            <li className='bridesmaid-side'>
              <p className='member-name'>Samantha Walker -</p>
              <p className='member-desc'>Friend of the Bride</p>
              <p className='member-role'>Maid of Honor</p>
            </li>
            <li className='groomsman-side'>
              <p className='member-name'>Ian Jones -</p>
              <p className='member-desc'>Friend of the Groom</p>
              <p className='member-role'>Best Man</p>
            </li>
            <li className='bridesmaid-side'>
              <p className='member-name'>Rebecca Stover -</p>
              <p className='member-desc'>Friend of the Bride</p>
              <p className='member-role'>Bridesmaid</p>
            </li>
            <li className='groomsman-side'>
              <p className='member-name'>Brett Hamilton -</p>
              <p className='member-desc'>Friend of the Groom</p>
              <p className='member-role'>Groomsmen</p>
            </li>
            <li className='bridesmaid-side'>
              <p className='member-name'>Sarah Matson -</p>
              <p className='member-desc'>Friend of the Bride</p>
              <p className='member-role'>Bridesmaid</p>
            </li>
            <li className='groomsman-side'>
              <p className='member-name'>Zach Bonus -</p>
              <p className='member-desc'>Friend of the Groom</p>
              <p className='member-role'>Groomsmen</p>
            </li>
            <li className='bridesmaid-side'>
              <p className='member-name'>Kaitlyn Rymarsuk -</p>
              <p className='member-desc'>Cousin of the Bride</p>
              <p className='member-role'>Bridesmaid</p>
            </li>
            <li className='groomsman-side'>
              <p className='member-name'>Darius Shultz -</p>
              <p className='member-desc'>Friend of the Groom</p>
              <p className='member-role'>Groomsmen</p>
            </li>
            <li className='bridesmaid-side'>
              <p className='member-name'>Mykayla Brown -</p>
              <p className='member-desc'>Sister of the Bride</p>
              <p className='member-role'>Junior Bridesmaid</p>
            </li>
          <div className='groomsman-side'>
            <p className='member-name'>Mykeira Brown -</p>
            <p className='member-desc'>Sister of the Bride</p>
            <p className='member-role'>Junior Bridesmaid</p>
          </div>
          </ul>
          <div className='bonusparty'>
            <p className='aspen-name'>Aspen</p>
            <p className='aspen-name'>Dog of the Bridge and Groom</p>
            <p className='aspen-name'>Flower Girl</p>
          </div>
        </div>
      </div>
      <div className='text-item'>
        <div id="accomodations" className="accomodations">
          <h1 className="accomodations-head">Hotels</h1>
          <p className='accomodations-p'>We have a reserved a block of rooms at the (Insert hotel name here). Please reserve under (what we call our block) to receive the discount.</p>
          <p className='accomodations-p'>(Insert Hotel here)</p>
          <p className='accomodations-p'>Alternative Locations in Marquette</p>
          <p className='accomodations-p'>(Insert Hotel here)</p>
          <p className='accomodations-p'>(Insert Hotel here)</p>
        </div>
      </div>
      <div className='text-item'>
        <div id="faq" className="faq">
          <h1 className="faq-head">FAQ</h1>
          <p className='faq-question'>Are kids allowed?</p>
          <p className='faq-answer'>No, this is an adult only event. We ask that please you get a sitter and enjoy a night without the kids.</p>
          <p className='faq-question'>Is there a dress code?</p>
          <p className='faq-answer'>No, please look nice but remember this event will be taking place in a barn/outside so please dress for the weather.</p>
          <p className='faq-question'>Can we take photos?</p>
          <p className='faq-answer'>During the ceremony we ask that you keep all phones and cameras put away. We have hired <a className='photographer' href='https://www.otterriverimages.com/'>a photographer</a> to capture the special day for us. During the rest of the night we are more than happy for you to take photos</p>
          <p className='faq-question'>Is parking available?</p>
          <p className='faq-answer'>Yes! There is plenty of parking available in the field nearby. There will be signs to help direct people as well.</p>
        </div>
      </div>
      <div className='text-item'>
        <div id="registry" className="registry">
          <h1 className="registry-h">Registry</h1>
          <p className='registry-p'>More information to come.</p>
        </div>
      </div>
      <div className='text-item'>
        <div id="rsvp" className="rsvp">
          <h1 className="rsvp-head">RSVP</h1>
          <p className='rsvp-p'>More information to come.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContentPage