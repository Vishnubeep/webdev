function MatchCard(props){
    return (
        <div>
            <h3>{props.team1} vs {props.team2}</h3>
            <p>Date: {props.date}</p>
            <p>Venue: {props.venue}</p>

            <button>Book Ticket</button>
        </div>
    );
}
export default MatchCard;