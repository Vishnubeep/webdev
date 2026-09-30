import { useState } from "react";

function BookingForm() {
    const [name, setName] = useState("");
    const [tickets, setTickets] = useState(1);

    function handleBooking(e) {
        e.preventDefault();

        alert(
            `Booking confirmed for ${name}. Number of tickets: ${tickets}`
        );
    }

    return (
        <form onSubmit={handleBooking}>
            <h2>Book Your Ticket</h2>

            <label>Name:</label>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label>Number of Tickets:</label>
            <input
                type="number"
                min="1"
                max="10"
                value={tickets}
                onChange={(e) => setTickets(e.target.value)}
                required
            />

            <label>Match:</label>
            <select required>
                <option value="">Select Match</option>
                <option value="csk-mi">CSK vs MI</option>
                <option value="rr-rcb">RR vs RCB</option>
                <option value="pbks-gt">PBKS vs GT</option>
            </select>

            <button type="submit">Confirm Booking</button>
        </form>
    );
}

export default BookingForm;