export default function progressNotification(
  notificationType: string,
  message: string,
): void {
      console.log(`${notificationType}: ${message}`);
}

progressNotification('Email', 'Hi');
progressNotification('Phone', 'Call me');