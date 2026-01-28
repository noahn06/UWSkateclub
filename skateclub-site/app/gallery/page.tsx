export default function Gallery() {
    const videos = [
        {
            id: 1,
            title: "SPRING SESSIONS 2024",
            description: "Best clips from spring term. Rails, stairs, and street spots."
        },
        {
            id: 2,
            title: "KICKFLIP MONTAGE",
            description: "Everyone's favorite trick. 50+ kickflips in 3 minutes."
        },
        {
            id: 3,
            title: "DOWNTOWN WATERLOO",
            description: "Hitting every spot in downtown. Security kicked us out twice."
        },
        {
            id: 4,
            title: "BEGINNER SESSIONS",
            description: "New skaters learning the basics. Everyone starts somewhere."
        },
        {
            id: 5,
            title: "TORONTO TRIP",
            description: "Road trip to T.O. Christie Pits, Ashbridges, and street missions."
        },
        {
            id: 6,
            title: "NIGHT SESSIONS",
            description: "After dark skating. Empty parks, good vibes, sketchy lighting."
        },
        {
            id: 7,
            title: "HALL OF MEAT",
            description: "The slams. The bails. The pain. Skateboarding hurts."
        },
        {
            id: 8,
            title: "BEST TRICK CONTEST",
            description: "Winner takes all. 10 tries to land your gnarliest trick."
        },
        {
            id: 9,
            title: "CAMPUS SPOTS",
            description: "Skating UW campus. Ledges, gaps, and dodging campus police."
        }
    ];

    return (
        <main>
            <div className="hero">
                <div className="container">
                    <h1>GALLERY</h1>
                    <p>VIDEOS, CLIPS, AND CARNAGE</p>
                </div>
            </div>

            <div className="content-section">
                <div className="container">
                    <h2>VIDEO ARCHIVE</h2>
                    <p>
                        Every session filmed. Every trick documented. This is our video vault—clips from sessions,
                        contests, trips, and everything in between. New videos drop regularly, so check back often.
                    </p>
                </div>
            </div>

            <div className="gallery-grid">
                {videos.map((video) => (
                    <div key={video.id} className="gallery-item">
                        <div className="video-placeholder">
                            <span>▶</span>
                        </div>
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                    </div>
                ))}
            </div>

            <div className="red-line"></div>

            <div className="content-section">
                <div className="container">
                    <h2>SUBMIT CLIPS</h2>
                    <p>
                        Got footage? Send it our way. Tag <span className="text-highlight">@uwskateclub</span> on Instagram
                        or DM us your clips. If it's good, we'll put it in the next video.
                    </p>
                    <p>
                        Film in landscape. Keep it raw. No filters, no slow-mo (unless it's a gnarly slam).
                        Just skateboarding.
                    </p>
                </div>
            </div>

            <div className="content-section">
                <div className="container">
                    <h2>PHOTOGRAPHERS & FILMERS</h2>
                    <p>
                        Shoutout to everyone behind the lens. You make this possible. If you shoot photos or film,
                        come session with us. We need more people documenting the scene.
                    </p>
                </div>
            </div>
        </main>
    );
}
