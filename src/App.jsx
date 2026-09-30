import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";

function App() {
    const matches = [
        {
            team1: "RCB",
            team2: "CSK",
            date: "10 April 2027",
            venue: "M. Chinnaswamy Stadium"
        },
        {
            team1: "MI",
            team2: "KKR",
            date: "12 April 2027",
            venue: "Wankhede Stadium"
        }
    ];

    return (
        <>
            <Navbar />

            <Hero />

            <h1>Upcoming IPL Matches</h1>

            {matches.map((match, index) => (
                <MatchCard
                    key={index}
                    team1={match.team1}
                    team2={match.team2}
                    date={match.date}
                    venue={match.venue}
                />
            ))}
        </>
    );
}

export default App;