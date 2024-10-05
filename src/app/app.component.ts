import { Component } from '@angular/core';

interface Seat {
  seatNumber: number;
  booked: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  maxSeats = 80;

  // Create a seat matrix (11 rows of 7 seats, last row of 3 seats)
  seatMatrix: Seat[][] = [];
  totalSeatsAvailable: number = 80;

  constructor() {
    this.initializeSeats();
  }

  // Initialize seat matrix
  initializeSeats() {
    let seatNumber = 1;
    for (let row = 0; row < 11; row++) {
      this.seatMatrix[row] = [];
      for (let col = 0; col < 7; col++) {
        this.seatMatrix[row].push({ seatNumber: seatNumber++, booked: false });
      }
    }
    // Last row with only 3 seats
    this.seatMatrix[11] = [];
    for (let col = 0; col < 3; col++) {
      this.seatMatrix[11].push({ seatNumber: seatNumber++, booked: false });
    }
  }

  // Function to book or cancel seats
  toggleSeatBooking(seat: Seat) {
    if (seat.booked) {
      seat.booked = false;
      this.totalSeatsAvailable++;
      alert(`Seat ${seat.seatNumber} has been cancelled.`);
    } else {
      if (this.totalSeatsAvailable > 0) {
        seat.booked = true;
        this.totalSeatsAvailable--;
        alert(`Seat ${seat.seatNumber} has been booked.`);
      } else {
        alert('No seats available for booking.');
      }
    }
  }

  // Function to book multiple seats
  bookSeats(numSeats: number) {
    if (numSeats < 1 || numSeats > 7) {
      alert('Please enter a valid number of seats (1-7).');
      return;
    }

    if (this.totalSeatsAvailable < numSeats) {
      alert('Not enough seats available.');
      return;
    }

    let seatsToBook: Seat[] = [];
    for (let row of this.seatMatrix) {
      // If there are enough consecutive unbooked seats in the row
      let availableSeats = row.filter((seat) => !seat.booked);
      if (availableSeats.length >= numSeats) {
        seatsToBook = availableSeats.slice(0, numSeats);
        break;
      }
    }

    // If no single row has enough consecutive seats, book nearby seats
    if (seatsToBook.length === 0) {
      for (let row of this.seatMatrix) {
        seatsToBook = seatsToBook.concat(row.filter((seat) => !seat.booked));
        if (seatsToBook.length >= numSeats) {
          seatsToBook = seatsToBook.slice(0, numSeats);
          break;
        }
      }
    }

    // Mark the seats as booked
    if (seatsToBook.length > 0) {
      seatsToBook.forEach((seat) => {
        seat.booked = true;
        this.totalSeatsAvailable--;
      });
      alert(
        `Seats booked: ${seatsToBook.map((seat) => seat.seatNumber).join(', ')}`
      );
    } else {
      alert('Not enough seats available.');
    }
  }
}
