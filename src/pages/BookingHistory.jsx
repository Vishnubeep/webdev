function BookingHistory() {
    const bookings = [
        {
            match: "CSK vs MI",
            date: "10 April 2026",
            tickets: 2
        },
        {
            match: "RR vs RCB",
            date: "15 April 2026",
            tickets: 1
        }
    ];

    return (
        <section>
            <h2>Booking History</h2>

            {bookings.map((booking, index) => (
                <div key={index}>
                    <h3>{booking.match}</h3>
                    <p>Date: {booking.date}</p>
                    <p>Tickets: {booking.tickets}</p>
                </div>
            ))}
        </section>
    );
}

export default BookingHistory;