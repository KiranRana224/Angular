importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
});

const messaging = firebase.messaging();

// Handle background push notifications
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = "New Message";
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/assets/icons/icon-128x128.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
