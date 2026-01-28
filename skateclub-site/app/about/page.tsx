export default function About() {
    return (
        <main>
            <div className="hero">
                <div className="container">
                    <h1>ABOUT</h1>
                    <p>WHO WE ARE AND WHAT WE'RE ABOUT</p>
                </div>
            </div>

            <div className="content-section">
                <div className="container">
                    <h2>THE CREW</h2>
                    <p>
                        Started by a handful of skaters who were tired of skating alone, <span className="text-highlight">UW SKATECLUB</span> has
                        become the go-to for anyone at Waterloo who actually skates. We're not some corporate-sponsored
                        team or a bunch of mall-grabbers. We're real skaters building a real scene.
                    </p>
                    <p>
                        Whether you've been skating for 10 years or just bought your first board, you're one of us.
                        We don't care about your Instagram followers or how many sponsors you have. Can you push?
                        Can you have fun? That's all that matters.
                    </p>
                </div>
            </div>

            <div className="red-line"></div>

            <div className="content-section">
                <div className="container">
                    <h2>OUR PHILOSOPHY</h2>

                    <div className="feature-box">
                        <h3>SKATEBOARDING IS NOT A CRIME</h3>
                        <p>
                            We skate where we want, when we want. Respect the spots, respect the locals, but don't
                            let anyone tell you where you can't roll. Skateboarding is freedom.
                        </p>
                    </div>

                    <div className="feature-box">
                        <h3>PROGRESSION OVER PERFECTION</h3>
                        <p>
                            Nobody lands everything first try. We celebrate the slams as much as the makes.
                            Every session is about getting better, pushing yourself, and having fun doing it.
                        </p>
                    </div>

                    <div className="feature-box">
                        <h3>CREW OVER EVERYTHING</h3>
                        <p>
                            Your board might break, your shoes will wear out, but the friendships you make skating
                            last forever. We look out for each other—on and off the board.
                        </p>
                    </div>

                    <div className="feature-box">
                        <h3>KEEP IT REAL</h3>
                        <p>
                            No fake hype, no clout chasing. Just skateboarding. We're here to skate, film, and
                            build something authentic. Everything else is just noise.
                        </p>
                    </div>
                </div>
            </div>

            <div className="red-line"></div>

            <div className="content-section">
                <div className="container">
                    <h2>GET INVOLVED</h2>
                    <p>
                        Want to be part of the crew? It's simple:
                    </p>
                    <ul className="skate-list">
                        <li>Follow us on Instagram <span className="text-highlight">@uwskateclub</span></li>
                        <li>Show up to sessions (posted weekly on our story)</li>
                        <li>Bring your board and a good attitude</li>
                        <li>Skate, film, have fun, repeat</li>
                    </ul>
                    <p style={{ marginTop: '30px' }}>
                        If you want to help run events, organize trips, or film/edit videos, hit us up in the DMs.
                        We're always looking for motivated people who want to give back to the scene.
                    </p>
                </div>
            </div>
        </main>
    );
}
