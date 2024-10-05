# Train Seat Reservation System

This is a simple **Angular** application for reserving seats in a train coach. The application allows users to book available seats, cancel bookings, and view seat availability in real-time.

## Features

- Displays a coach layout with 80 seats (7 seats per row, last row with 3 seats).
- Allows users to reserve up to 7 seats at once.
- Seats are booked in the same row if available; otherwise, nearby seats are reserved.
- Real-time seat availability is displayed, with **green** representing available seats and **red** representing booked seats.
- Users can cancel their reservations by clicking on booked seats.
- Input validation for number of seats to be booked (1 to 7).

## Technologies Used

- **Angular** (v9.1.0)
- **TypeScript**
- **CSS** for basic styling

## Installation and Setup

To run this application locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/train-seat-reservation.git
cd train-seat-reservation
