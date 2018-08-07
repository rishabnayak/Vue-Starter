import Firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVwzbGzUNafe27UxAxlvGyAcwfAmxOs3Q",
    authDomain: "vue-rishab.firebaseapp.com",
    databaseURL: "https://vue-rishab.firebaseio.com",
    projectId: "vue-rishab",
    storageBucket: "vue-rishab.appspot.com",
    messagingSenderId: "558064182757"
  };
  const auth = Firebase.initializeApp(config);
  const db = auth.database();
