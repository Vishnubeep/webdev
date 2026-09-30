import Hero from "../components/Hero";
import MatchCard from "../components/MatchCard";

function Home() {
    const matches = [
        {
            team1: "CSK",
            team2: "MI",
            date: "10 April 2026",
            venue: "Chennai"
        },
        {
            team1: "RR",
            team2: "RCB",
            date: "15 April 2026",
            venue: "Jaipur"
        },
        {
            team1: "PBKS",
            team2: "GT",
            date: "20 April 2026",
            venue: "Ahmedabad"
        }
    ];

    return (
        <>
            <Hero />

            <section>
                <h2>Available Matches</h2>

                {matches.map((match, index) => (
                    <MatchCard
                        key={index}
                        team1={match.team1}
                        team2={match.team2}
                        date={match.date}
                        venue={match.venue}
                    />
                ))}
            </section>
        </>
    );
}

export default Home;