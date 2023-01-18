import EmailNotification from './EmailNotification';
import Notificator from './Notificator';

type Book = {
  book: string;
  author: string;
  genre: string;
}

// const progressNotification = (notification: string): void => {
//   console.log(notification);
// }

class Wishlist {
  private wishlist: Book[];

  constructor(book: Book) {
    this.wishlist = [];
    this.wishlist.push(book);
  }

  addToWishlist(newBook: Book): void {
    this.wishlist.push(newBook);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  notificator: Notificator;

  constructor(readingGoal: number, notificator: Notificator = new EmailNotification('email')) {
    this.notificator = notificator;
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
      this.notificator.sendNotification(
      'There are still some books to go!',
    );
  }
}

const readTracker = new ReadingTracker(20, new EmailNotification('email@email.com'));
const wishlist = new Wishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishlist.addToWishlist({ book: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fantasy'})
wishlist.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);