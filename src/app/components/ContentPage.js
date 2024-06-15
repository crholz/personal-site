'use client';
import Script from 'next/script'
import './ContentPage.css'

function ContentPage() {
  return (
    <>
    <div className='content-page-box'>
      <ul className="picture-break">
        <li className="picture-break-1"><img src="/images/picture-break-1.jpg" className="picture-break-img" /> </li>
        <li className="picture-break-2"><img src="/images/picture-break-2.jpg" className="picture-break-img" /></li>
        <li className="picture-break-3"><img src="/images/picture-break-3.jpg" className="picture-break-img" /> </li>
      </ul>
      <div className='text-item'>
        <div id="our-story" className="our-story">
          <h1 className="our-story-head">Our Story</h1>
          <div className="new-story-timeline">
            <div className="new-story-event">
                <h3 className="new-story-date-year">2019</h3>
                <p className="new-story-date-story">We met at Michigan Technological University as engineering students. Our first date on September 9th at Rodeo, a Mexican restaurant we still love, marked the beginning of our strong connection.</p>
            </div>
            
            <div className="new-story-event">
                <h3 className="new-story-date-year">2020</h3>
                <p className="new-story-date-story">We grew closer, making memories and enjoying our first vacation together at the Mall of America. The COVID-19 lockdowns led us to move in together early, spending nearly every day together and falling in love.</p>
            </div>
            
            <div className="new-story-event">
                <h3 className="new-story-date-year">2021</h3>
                <p className="new-story-date-story">Life returned to normal, but Corbin graduated and moved to Minnesota for work. Despite the distance, we visited each other often, realizing that if we could get through this, we could overcome anything together.</p>
            </div>
            
            <div className="new-story-event">
                <h3 className="new-story-date-year">2022</h3>
                <p className="new-story-date-story">Mykenzie interned in Minnesota, and we lived together for 8 months. We got Aspen, our basset hound puppy, and explored Minnesota, deepening our love and knowing an engagement was likely soon.</p>
            </div>
            
            <div className="new-story-event">
                <h3 className="new-story-date-year">2023</h3>
                <p className="new-story-date-story">Despite being seven hours apart, we knew it was Mykenzie&apos;s final semester. In February, Corbin proposed during Michigan Tech&apos;s Winter Carnival. After graduation, Mykenzie moved to Minnesota, and we began building our life together.</p>
            </div>
          </div>
          <div className="divbar-top"><hr className="divline"/></div>
          <div className='story-footer'>
            <p className='story-footer-text'>That&apos;s our story so far! We hope to see you all on September 7th of 2024 to celebrate our</p>
            <p className='story-footer-text'>love as we join hands in marriage!</p>
          </div>
          <div className="divbar-bottom"><hr className="divline"/></div>
        </div>
      </div>
      <div className='picture-break'>
        <div className='picture-break-dock-ring'>
          <div className='picture-break-dock' />
        </div>
      </div>
      <div className='text-item'>
        <div id="details" className="details">
          <h1 className="details-head">Details</h1>
          <p className='location-text'>Location</p>
          <p className='location-name'>Belsolda Farms</p>
          <p className='location-addr'>488 Mangum Rd</p>
          <p className='location-city'>Marquette, MI, 49855</p>
          <div className="divbar-dotted-top"><hr className="divline-dotted"/></div>
          <p className='details-p'>Getting to the venue: Get to US 41 and travel it until you reach Magnum Road. Which is on the left right after GT Sales. You will follow this road for about 5 minutes where you should see the barn on your right. There will be signs to show where to park</p>
          <div className="divbar-dotted-bottom"><hr className="divline-dotted"/></div>
          <div className='google-map'>
            <iframe className='google-map-item' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10994.288144605103!2d-87.2771072!3d46.4571762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4e185b3d01a50f%3A0xd192a5143d6f30d6!2sBelsolda%20farm!5e0!3m2!1sen!2sus!4v1692237051816!5m2!1sen!2sus" width="600" height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <h2 className='timeline-header'>Timeline</h2>
          <div className='timeline'>
            <div className='timeline-container-left'>
              <img src="/images/icon-a.png" className="timeline-img-left" />
              <div className='timeline-textbox'>
                <h2 className='event-text'>Ceremony Starts!</h2>
                <small className='event-small'>3:00 PM</small>
                <p className='event-p'>The ceremony is set for 3:00 PM. Please make sure to arrive early!</p>
                <span className='left-container-arrow'></span>
              </div>
            </div>
            <div className='timeline-container-right'>
              <img src="/images/icon-b.png" className="timeline-img-right" />
              <div className='timeline-textbox'>
                <h2 className='event-text'>Cocktail Hour</h2>
                <small className='event-small'>3:30 PM</small>
                <p className='event-p'>Dinner and Reception will be held at Belsolda Farm so you can relax and have a drink.</p>
                <span className='right-container-arrow'></span>
              </div>
            </div>
            <div className='timeline-container-left'>
              <img src="/images/icon-c.png" className="timeline-img-left" />
              <div className='timeline-textbox'>
                <h2 className='event-text'>Dinner Starts</h2>
                <small className='event-small'>5:00 PM</small>
                <p className='event-p'>Enjoy a meal catered by Mama Russo&apos;s.</p>
                <span className='left-container-arrow'></span>
              </div>
            </div>
            <div className='timeline-container-right'>
              <img src="/images/icon-d.png" className="timeline-img-right" />
              <div className='timeline-textbox'>
                <h2 className='event-text'>Reception Begins</h2>
                <small className='event-small'>6:30 PM</small>
                <p className='event-p'>At this time, dinner tables will start being moved to make space for the DJ and dancing/</p>
                <span className='right-container-arrow'></span>
              </div>
            </div>
            <div className='timeline-container-left'>
              <img src="/images/icon-e.png" className="timeline-img-left" />
              <div className='timeline-textbox'>
                <h2 className='event-text'>Closing Time!</h2>
                <small className='event-small'>11:00 PM</small>
                <p className='event-p'>The music will be shut off at 11:00pm, and lights out is at midnight.</p>
                <span className='left-container-arrow'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='picture-break'>
        <div className='picture-break-woods-ring'>
          <div className='picture-break-woods' />
        </div>
      </div>
      <div className='text-item'>
      <div id="wedding-party" className="wedding-party">
            <h1 className="wedding-party-head">Wedding Party</h1>
            <ul className="wedding-party-list">
                <li className="wedding-party-item bridesmaid-side">
                    <p className="member-role">Maid of Honor</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/sam-square.jpg" alt="Samantha Walker" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Samantha Walker</p>
                    <p className="member-desc">Friend of the Bride</p>
                </li>
                <li className="wedding-party-item groomsman-side">
                    <p className="member-role">Best Man</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/ian-square.jpg" alt="Ian Jones" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Ian Jones</p>
                    <p className="member-desc">Friend of the Groom</p>
                </li>
                <li className="wedding-party-item bridesmaid-side">
                    <p className="member-role">Bridesmaid</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/becky-square.jpg" alt="Rebecca Stover" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Rebecca Stover</p>
                    <p className="member-desc">Friend of the Bride</p>
                </li>
                <li className="wedding-party-item groomsman-side">
                    <p className="member-role">Groomsman</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/brett-square.jpg" alt="Brett Hamilton" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Brett Hamilton</p>
                    <p className="member-desc">Friend of the Groom</p>
                </li>
                <li className="wedding-party-item bridesmaid-side">
                    <p className="member-role">Bridesmaid</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/sarah-square.jpg" alt="Sarah Matson" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Sarah Matson</p>
                    <p className="member-desc">Friend of the Bride</p>
                </li>
                <li className="wedding-party-item groomsman-side">
                    <p className="member-role">Groomsman</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/zach-square.jpg" alt="Zachary Bonus" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Zachary Bonus</p>
                    <p className="member-desc">Friend of the Groom</p>
                </li>
                <li className="wedding-party-item bridesmaid-side">
                    <p className="member-role">Bridesmaid</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/katie-square.jpg" alt="Kaitlyn Rymarsuk" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Kaitlyn Rymarsuk</p>
                    <p className="member-desc">Cousin of the Bride</p>
                </li>
                <li className="wedding-party-item groomsman-side">
                    <p className="member-role">Groomsman</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/darius-square.jpg" alt="Darius Shultz" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Darius Shultz</p>
                    <p className="member-desc">Friend of the Groom</p>
                </li>
                <li className="wedding-party-item bridesmaid-side">
                    <p className="member-role">Junior Bridesmaid</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/kayla-square.jpg" alt="Mykayla Brown" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Mykayla Brown</p>
                    <p className="member-desc">Sister of the Bride</p>
                </li>
                <li className="wedding-party-item groomsman-side">
                    <p className="member-role">Junior Bridesmaid</p>
                    <div className="wedding-party-img-container">
                        <img src="/images/keira-square.jpg" alt="Mykeira Brown" className="wedding-party-img" layout="fill" objectFit="cover" />
                    </div>
                    <p className="member-name">Mykeira Brown</p>
                    <p className="member-desc">Sister of the Bride</p>
                </li>
            </ul>
            <div className="bonusparty">
                <p className="aspen-role">Flower Girl</p>
                <div className="aspen-wedding-party-img-container">
                    <img src="/images/aspen.jpg" alt="Aspen" className="aspen-photo" layout="fill" objectFit="cover" />
                </div>
                <p className="aspen-name">Aspen -</p>
                <p className="aspen-desc">Pet of the Bride and Groom</p>
            </div>
        </div>
      </div>
      <div className='text-item'>
        <div id="accomodations" className="accomodations">
          <h1 className="accomodations-head">Hotels</h1>
          <p className='accomodations-p'>Below are a few recommendations of hotels in the Marquette area:</p>
          <div className='hotel-info'>
            <img src='/images/hotel-1.jpg' className='hotel-photo' />
            <p className='hotel-name'>Comfort Suites</p>
            <p className='hotel-addr'>2463 US Hwy 41, Marquette, MI 49855</p>
            <p className='hotel-dist'>Distance From Venue: 17 Minutes</p>
            <p><a className='hotel-website' href='https://www.choicehotels.com/michigan/marquette/comfort-suites-hotels/mi722?mc=llgoxxpx'>Website</a> Phone: (906) 228-0028</p>
            <p className='hotel-note'>Additional note: If you mention you are booking to attend the wedding on September 7th, 2024 for a 20% discount.</p>
          </div>
          <div className='hotel-info'>
            <img src='/images/hotel-2.jpg' className='hotel-photo' />
            <p className='hotel-name'>Americas Best Value Inn</p>
            <p className='hotel-addr'>1010 M-28, Marquette, MI 49855</p>
            <p className='hotel-dist'>Distance From Venue: 7 Minutes</p>
            <p><a className='hotel-website' href='https://www.abvimarquette.com/'>Website</a> Phone: (906) 249-1712</p>
          </div>
          <div className='hotel-info'>
            <img src='/images/hotel-3.jpg' className='hotel-photo' />
            <p className='hotel-name'>Magnuson Hotel Country Inn</p>
            <p className='hotel-addr'>850 US Hwy 41, Ishpeming, MI 49849</p>
            <p className='hotel-dist'>Distance From Venue: 28 Minutes</p>
            <p><a className='hotel-website' href='https://magnusonhotelcountryinn.com/'>Website</a> Phone: (906) 485-6345</p>
          </div>
          <div className='hotel-dislosure'>
            <div className="divbar-dotted-top"><hr className="divline-dotted"/></div>
            <p className='accomodations-p'>Please make sure to book your room sooner rather than later to ensure you get a room!</p>
            <div className="divbar-dotted-bottom"><hr className="divline-dotted"/></div>
          </div>
        </div>
      </div>
      <div className='text-item'>
        <div id="faq" className="faq">
          <h1 className="faq-head">FAQ</h1>
          <p className='faq-question'>Are kids allowed?</p>
          <p className='faq-answer'>No, this is an adult only event. We ask that you please get a sitter and enjoy a night without the kids.</p>
          <p className='faq-question'>Is there a dress code?</p>
          <p className='faq-answer'>Not really, please look presentable and avoid wearing sage green and dusty blue. Also keep in mind this event is taking place outside/in a barn so dress for the terrain ( We suggest no heels) and for the weather.</p>
          <p className='faq-question'>Can we take photos?</p>
          <p className='faq-answer'>During the ceremony we ask that you keep all phones and cameras put away. We have hired a<a className='photographer' href='https://www.otterriverimages.com/'> photographer</a> to capture the special day for us. During the rest of the night we are more than happy for you to take photos</p>
          <p className='faq-question'>Is parking available?</p>
          <p className='faq-answer'>Yes! There is plenty of parking available in the field nearby. There will be signs to help direct people as well. Also keep in mind that you may leave your car overnight but it needs to be picked up the next day by 11:00am.</p>
        </div>
      </div>
      <div className='text-item'>
        <div id="rsvp" className="rsvp">
          <h1 className="rsvp-head">RSVP</h1>
          <p className='rsvp-p'>If you have received an RSVP, the following can be used to conveniently RSVP</p>
	        <div className="rsvp-embed">
            <iframe className="rsvp-iframe" 
              src="https://corbinandmykenzie.anrsvp.com/?embed=true" scrolling='no' wmode='transparent'>
            </iframe>
          </div>
        </div>
      </div>
      <div className='text-item'>
        <div id="registry" className="registry">
          <h1 className="registry-h">Registry</h1>
          <p className='registry-p'>Gifts are appreciated but never expected. Your presence at our wedding is the most precious gift we could receive. If you do wish to give a gift, we have created a registry with items that will help us build our life together. However, please do not feel required to give a gift; your love and support mean the world to us. Thank you for being part of our special day.</p>
          <div id="reg-script" className='reg-box'>
            <Script className='myregistry_embeded_iframe' id='script_myregistry_giftlist_iframe' type='text/javascript' src='//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=tGIzShYCzRjZq_yPBBO8yw2&v=2' ></Script>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContentPage
