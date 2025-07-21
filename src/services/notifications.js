export function requestNotificationPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('✅ Notification permission granted');
      } else {
        console.warn('❌ Notification permission denied');
      }
    });
  } else {
    console.error('❌ This browser does not support notifications.');
  }
}
