export default function Home() {
  return (
    <main>
      <div className="hero">
        <div className="container">
          <h1>SKATE<br />AND<br />DESTROY</h1>
          <p>UNIVERSITY OF WATERLOO'S SKATEBOARDING CREW</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <h2>LATEST</h2>
          <p>
            <span className="text-highlight">UW SKATECLUB</span> is where the real skaters at Waterloo come to shred.
            No posers, no BS—just pure skateboarding. We hit the streets, parks, and any spot we can find.
            Every week, rain or shine.
          </p>
          <p>
            From first-timers learning to push to veterans throwing down hammers, everyone's welcome.
            We're building something real here—a crew that actually skates.
          </p>
        </div>
      </div>

      <div className="red-line"></div>

      <div className="content-section">
        <div className="container">
          <h2>WHAT WE DO</h2>

          <div className="feature-box">
            <h3>WEEKLY SESSIONS</h3>
            <p>
              Every week we meet up and skate. Local parks, street spots, campus rails—wherever.
              Check our socials for the spot and time. Just show up with your board.
            </p>
          </div>

          <div className="feature-box">
            <h3>VIDEO PARTS</h3>
            <p>
              We film everything. Your tricks, your slams, your progression. End of term we drop
              full video parts. Get your clips in and you might make the cut.
            </p>
          </div>

          <div className="feature-box">
            <h3>SKATE TRIPS</h3>
            <p>
              Toronto, Montreal, Detroit—we take trips to hit legendary spots. Van full of boards,
              cameras rolling, good times guaranteed.
            </p>
          </div>

          <div className="feature-box">
            <h3>CONTESTS & JAMS</h3>
            <p>
              Best trick contests, game of SKATE, jam sessions. Prizes, bragging rights, and
              respect on the line. Come prove yourself.
            </p>
          </div>
        </div>
      </div>

      <div className="red-line"></div>

      <div className="content-section">
        <div className="container">
          <h2>JOIN THE CREW</h2>
          <p>
            Don't just sit there. Grab your board and come session with us. Follow <span className="text-highlight">@uwskateclub</span> on
            Instagram for updates, spots, and session times.
          </p>
          <p>
            All skill levels. All styles. Just bring the stoke and we'll see you out there.
          </p>
        </div>
      </div>
    </main>
  );
}
