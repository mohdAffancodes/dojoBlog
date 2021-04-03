import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTHDOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_APP_ID,
   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
} else {
   firebase.app(); // if already initialized, use that one
}
firebase.firestore().settings({ timeStampsInSnapshots: true });
export default firebase;
