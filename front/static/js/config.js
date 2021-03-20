var firebaseConfig = {
  apiKey: "AIzaSyBCekAwkVEXkjfaoEOcd3n3xWt15Iyq-CQ",
  authDomain: "hack-hexachlorocyclohexane.firebaseapp.com",
  projectId: "hack-hexachlorocyclohexane",
  storageBucket: "hack-hexachlorocyclohexane.appspot.com",
  messagingSenderId: "82471741313",
  appId: "1:82471741313:web:8a1cb946643c04d262ea80",
  measurementId: "G-J3BYQNXPH2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
db = firebase.firestore();