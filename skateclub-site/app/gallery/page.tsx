export default function Gallery() {
    const videos = [
        {
            id: 1,
            title: "Spring Session 2024",
            description: "Highlights from our spring skate sessions at the campus park"
        },
        {
            id: 2,
            title: "Kickflip Compilation",
            description: "Club members landing their best kickflips"
        },
        {
            id: 3,
            title: "Downtown Street Skating",
            description: "Exploring downtown Waterloo's best spots"
        },
        {
            id: 4,
            title: "Beginner Workshop",
            description: "Teaching the fundamentals to new skaters"
        },
        {
            id: 5,
            title: "Summer Skate Trip",
            description: "Road trip to Toronto's iconic skate parks"
        },
        {
            id: 6,
            title: "Night Session",
            description: "Late night skating under the lights"
        }
    ];

    return (
        <main>
            <div className="container">
                <div className="hero">
                    <h1>Gallery</h1>
                    <p>Clips, videos, and moments from our sessions</p>
                </div>

                <div className="content-section">
                    <h2>Featured Videos</h2>
                    <p>
                        Check out our latest clips and session highlights. We're constantly filming and documenting
                        the progression of our members. Got footage to share? Tag us on social media!
                    </p>
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

                <div className="content-section" style={{ marginTop: '3rem' }}>
                    <h2>Submit Your Clips</h2>
                    <p>
                        Landed something sick? We want to see it! Send us your best clips and they might be featured
                        in our next compilation video. Follow us on Instagram and tag @uwskateclub in your posts.
                    </p>
                </div>
            </div>
        </main>
    );
}
