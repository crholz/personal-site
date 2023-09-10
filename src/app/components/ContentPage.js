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
          <div className='date-entries'>
            <ul className='date-entry'>
              <li className='date-year'>2019:</li>
              <li className='date-story'>Both attending Michigan Technological University as engineering students we happened to cross paths. On September 9th we went on our first date at Rodeo, a mexican restaurant that to this day we both very much enjoy. Starting right on this day we knew that we had a strong connection.</li>
            </ul>
            <ul className='date-entry'>
              <li className='date-year'>2020:</li>
              <li className='date-story'>After spending time together growing our connection and making memories, we decided to go to the Mall of America for spring break. We had a great time on our first vacation together, but on the way home we got the alert that things were shutting down for COVID. For us this meant classes were going online and there would be no more living in the dorms. This resulted in us moving in together pretty early on. For the rest of the year we got to spend pretty much everyday together and get to know everything about one another. This time is when we knew that we were falling in love with each other.</li>
            </ul>
            <ul className='date-entry'>
              <li className='date-year'>2021:</li>
              <li className='date-story'>As this year rolled around things started to go back to normal which meant that we got back to normal routine as well. Unfortunately we both knew what this year would also bring. Corbin was graduating and moving to Minnesota to start his job. From this point there are two years where we would have to spend most of our time apart. As the time went on with us traveling to visit one another whenever we got the chance we made the best out of the situation. We also realized that if we could get through this that we could get through anything together</li>
            </ul>
            <ul className='date-entry'>
              <li className='date-year'>2022:</li>
              <li className='date-story'>Mykenzie got an internship in Minnesota, and we got to live together for about 8 months. During this time we Aspen our basset hound puppy, explored Minnesota, and grew the love between us. After this time we both knew it was pretty likely in the next year we would get engaged.</li>
            </ul>
            <ul className='date-entry'>
              <li className='date-year'>2023:</li>
              <li className='date-story'>We took living seven hours apart again in stride, knowing that it was Mykenzie’s final semester of college and we would be together again in a few months. During February Corbin was coming to visit Mykenzie for Michigan Tech’s Winter Carnival with a plan worked out with her friends. After Mykenzie got to spend a day with her friends, they suggested the end it with a hike. As they went along the trail, they knew that Corbin would be waiting with a surprise. As we rounded a bend she saw him and knew what was happening. As she approached him, he got down on one knee in the snow and popped the question. After saying yes and excitedly sharing the news we unfortunately still had two month to go of long distance. Soon enough Mykenzie graduated and moved back out to Minnesota where we are have started to build our life together.</li>
            </ul>
          </div>
          <div className="divbar-top"><hr className="divline"/></div>
          <div className='story-footer'>
            <p className='story-footer-text'>That’s our story so far! We hope to see you all on September 7th of 2024 to celebrate our</p>
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
            <iframe className='google-map-item' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10994.288144605103!2d-87.2771072!3d46.4571762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4e185b3d01a50f%3A0xd192a5143d6f30d6!2sBelsolda%20farm!5e0!3m2!1sen!2sus!4v1692237051816!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
          <ul className='wedding-party-list'>
            <li className='bridesmaid-side'>
            <p className='member-role'>Maid of Honor</p>
              <img src="/images/sam-square.jpg" className="wedding-party-img" />
              <p className='member-name'>Samantha Walker -</p>
              <p className='member-desc'>Friend of the Bride</p>
            </li>
            <li className='groomsman-side'>
              <p className='member-role'>Best Man</p>
              <img src="/images/ian-square.jpg" className="wedding-party-img" />
              <p className='member-name'>Ian Jones-</p>
              <p className='member-desc'>Friend of the Groom</p>
            </li>
            <li className='bridesmaid-side'>
              <p className='member-role'>Bridesmaid</p>
              <img src="/images/becky-square.jpg" className="wedding-party-img" />
              <p className='member-name'>Rebecca Stover -</p>
              <p className='member-desc'>Friend of the Bride</p>
            </li>
            <li className='groomsman-side'>
              <p className='member-role'>Groomsman</p>
              <img src="/images/brett-square.jpg" className="wedding-party-img" />
              <p className='member-name'>Brett Hamilton -</p>
              <p className='member-desc'>Friend of the Groom</p>
            </li>
            <li className='bridesmaid-side'>
              <p className='member-role'>Bridesmaid</p>
              <img src="/images/sarah-square.jpg" className="wedding-party-img" />
              <p className='member-name'>Sarah Matson -</p>
              <p className='member-desc'>Friend of the Bride</p>
              
            </li>
            <li className='groomsman-side'>
              <p className='member-role'>Groomsman</p>
              <img src="/images/zach-square.jpg" className="wedding-party-img" />
              <p className='member-name'>Zachary Bonus -</p>
              <p className='member-desc'>Friend of the Groom</p>
            </li>
            <li className='bridesmaid-side'>
            <p className='member-role'>Bridesmaid</p>
              <img src="/images/katie-square.jpg" className="wedding-party-img" />
              <p className='member-name'>Kaitlyn Rymarsuk -</p>
              <p className='member-desc'>Cousin of the Bride</p>
            </li>
            <li className='groomsman-side'>
              <p className='member-role'>Groomsman</p>
              <img src="/images/darius-square.jpg" className="wedding-party-img" />
              <p className='member-name'>Darius Shultz -</p>
              <p className='member-desc'>Friend of the Groom</p>
            </li>
            <li className='bridesmaid-side'>
              <p className='member-role'>Junior Bridesmaid</p>
              <img src="/images/kayla-square.jpg" className="wedding-party-img" />
              <p className='member-name'>Mykayla Brown -</p>
              <p className='member-desc'>Sister of the Bride</p>
            </li>
          <div className='groomsman-side'>
          <p className='member-role'>Junior Bridesmaid</p>
            <img src="/images/keira-square.jpg" className="wedding-party-img" />
            <p className='member-name'>Mykeira Brown -</p>
            <p className='member-desc'>Sister of the Bride</p>
          </div>
          </ul>
          <div className='bonusparty'>
            <p className='aspen-name'>Flower Girl</p>
            
            <img src="/images/aspen.jpg" className="aspen-photo" />
            <p className='aspen-name'>Aspen -</p>
            <p className='aspen-name'>Pet of the Bride and Groom</p>
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
            <p className='hotel-name'>America's Best Value Inn</p>
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
            <p className='accomodations-p'>Please make sure to book your room sooner rather than later to ensure you get a room!</p>
          </div>
        </div>
      </div>
      <div className='text-item'>
        <div id="faq" className="faq">
          <h1 className="faq-head">FAQ</h1>
          <p className='faq-question'>Are kids allowed?</p>
          <p className='faq-answer'>No, this is an adult only event. We ask that please you get a sitter and enjoy a night without the kids.</p>
          <p className='faq-question'>Is there a dress code?</p>
          <p className='faq-answer'>Not really, please look presentable and avoid wearing sage green and dusty blue. Also keep in mind this event is taking place outside/in a barn so dress for the terrain ( We suggest no heels) and for the weather.</p>
          <p className='faq-question'>Can we take photos?</p>
          <p className='faq-answer'>During the ceremony we ask that you keep all phones and cameras put away. We have hired a<a className='photographer' href='https://www.otterriverimages.com/'> photographer</a> to capture the special day for us. During the rest of the night we are more than happy for you to take photos</p>
          <p className='faq-question'>Is parking available?</p>
          <p className='faq-answer'>Yes! There is plenty of parking available in the field nearby. There will be signs to help direct people as well. Also keep in mind that you may leave your car overnight but it needs to be picked up the next day by 11:00am.</p>
        </div>
      </div>
      <div className='text-item'>
        <div id="registry" className="registry">
          <h1 className="registry-h">Registry</h1>
          <p className='registry-p'>Gifts are appreciated but never expected. Please do not feel required to give a gift. Closer to the wedding we will release a list if you would like to contribute to our future together!</p>
        </div>
      </div>
      <div className='text-item'>
        <div id="rsvp" className="rsvp">
          <h1 className="rsvp-head">RSVP</h1>
          <p className='rsvp-p'>Check back in the future to conveniently RSVP from this page.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContentPage