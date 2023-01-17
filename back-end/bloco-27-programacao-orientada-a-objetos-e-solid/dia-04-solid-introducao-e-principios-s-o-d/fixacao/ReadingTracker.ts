type Book = {
  book: string;
  author: string;
  genre: string;
}

const progressNotification = (notification: string): void => {
  console.log(notification);
}

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

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
      progressNotification(
      'There are still some books to go!',
    );
  }
}

const readTracker = new ReadingTracker(20);
const wishlist = new Wishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishlist.addToWishlist({ book: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fantasy'})
wishlist.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);